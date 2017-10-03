(ns contact-uploader.core
  (:require [clojure.data.csv :as csv]
            [clojure.data.json :as json]
            [clojure.spec.alpha :as s]
            [clojure.string :refer [join trim]]
            [clojure.walk :as walk]
            [contact-uploader.constants :as const]
            [contact-uploader.parsers :refer [parser]]
            [contact-uploader.spec :as spec]
            [contact-uploader.util :refer :all]
            [contact-uploader.validators :as v]
            [contact-uploader.wordpress-api :as wp]
            [clojure.tools.cli :refer [parse-opts]]
            [environ.core :refer [env]]
            [org.httpkit.client :as http])
  (:import (org.apache.commons.text StringEscapeUtils)
           (org.apache.commons.lang3 StringUtils))
  (:gen-class))

;; Define Global State

(def allow-new? (atom false))

(defn reduce-schools
  [school-list next-line]
  (if (-> school-list first vector?)
    (if (re-seq #"\d" (first next-line))
      (conj school-list [next-line])
      (let [curr (conj (last school-list) next-line)]
        (conj (pop school-list) curr)))
    [[next-line]]))

(defn reduce-personnel
  [personnel-list next-line]
  (if (= "PHONE" (second next-line))
    (conj personnel-list [next-line])
    (let [curr (conj (last personnel-list) next-line)]
      (conj (pop personnel-list) curr))))

(defn create-contact-info
  ([body fields]
   (create-contact-info nil body fields))
  ([id body fields]
   (let [{:keys [body]} (wp/post id body)
         {:keys [id code message data]} (json->edn body)]
     (if (nil? id)
       (throw (Exception. (str "\nBody: " body "\nStatus: " (:status data) "\nMessage: " message)))
       (wp/set-acf id fields)))))

(defn create-acf-fields
  [key data]
  (let [{:keys [address tel fax email job-title short name staff]} data
        base (merge {:telephone tel} (keyed [address fax email]))]
    (case key
      :personnel (merge base {:job_title job-title})
      :offices (merge base {:job_title job-title})
      :schools (merge base
                      {:long_name name
                       :short_name short
                       :website "https://cnmipss.org"
                       :admin_staff (->> staff
                                         (filter #(> (count (:name %)) 0))
                                         (map (fn [{:keys [name, tel, email]}]
                                                (join "\r\n" [name, (str "Tel: " tel), (str "Email: " email)])))
                                         (join "\r\n\r\n"))})
      :headstarts (merge base
                         {:long_name name
                          :short_name name
                          :admin_staff (->> staff
                                            (filter #(> (count (:name %)) 0))
                                            (map (fn [{:keys [name, tel, email]}]
                                                   (join "\r\n" [name, (str "Tel: " tel), (str "Email: " email)])))
                                            (cons (join "\r\n" [(str (get-in data [:coord :name]) ", Site Coordinator")
                                                                (str "Tel: " (get-in data [:coord :tel]))
                                                                (str "Email: " (get-in data [:coord :email]))]))
                                            (join "\r\n\r\n"))}))))

(defn level-set
  [name]
  (cond
    (re-seq #"(?i)Head" name) ["54"]
    (re-seq #"(?i)Elem" name) ["51"]
    (re-seq #"(?i)Middle" name) ["50"]
    (re-seq #"(?i)jr" name) ["53"]
    (re-seq #"(?i)High" name) ["52"]
    :else nil))

(defn create-post-info
  [key data]
  (let [{name :name} data
        title (sanitize name)
        status "publish"
        level (level-set name)]
    (cond
      (#{:personnel :offices} key) (keyed [title status])
      (#{:schools :headstarts} key) (keyed [title status level]))))

(defn post-info
  [key data]
  ;(println "post-info" key data)
  (let [{name :name} data
        search-name (v/encode-name (subs name 0 (min (count name) 50)))
        {get-body :body} (wp/search search-name)
        contacts (filter #(= (sanitize name) (sanitize (get-in % ["title" "rendered"])))
                         (json/read-str get-body))
        body (json/write-str (create-post-info key data))
        fields (create-acf-fields key data)]
    (if (> (count contacts) 0)
      (if (> (count contacts) 1)
        (throw (Exception. (str "Name collision: " (apply str contacts))))
        (let [id (get (first contacts) "id")]
          (println "Updating: " name id)
          (create-contact-info id  body fields)))
      (do
        (println "Creating: " body)
        (if @allow-new?
          (create-contact-info body fields)
          (throw (Exception. "No new entries unless specified with :new")))))
    (identity data)))

(defn apply-filters
  [key data]
;  (println "apply-filters")
  (cond
    (#{:personnel} key) (reduce reduce-personnel [] data) ;
    (#{:offices} key) (filter #(and (> (count (trim (nth % 2))) 1)
                                 (> (count (trim (first %))) 0)) data)
    (#{:schools :headstarts} key) (reduce reduce-schools data)))

(defn upload-data
  [key file]
  (wp/authorize)
  (as-> file data
   (csv/read-csv (slurp data))
   (apply-filters key data)
   (parser key data)
   (sort #(compare (get-in %1 [:name])
                   (get-in %2 [:name]))
                    data)
   (dorun (map #(post-info key %) data))))

(defn validate-args
  [key file]
  (if (not= (type key) clojure.lang.Keyword)
    (throw (Exception. (str "Keys must be keywords: " key))))
  (if (not= (type file) java.lang.String)
    (throw (Exception. "Filenames must be strings: " file))))

(defprotocol parse-args
  (parse-arg [arg] "Turn filename arg to associated keyword"))

(extend-protocol parse-args
  java.lang.String
  (parse-arg [arg]
    (-> (clojure.string/replace arg #"\.csv" "")
        (clojure.string/replace #"\:" "")
        (keyword)))
  clojure.lang.Keyword
  (parse-arg [arg] arg))

(defn -main
  "Process CSV file and create WP Contact Info & School Posts from data"
  [& args]
  {:pre [(s/assert seq? args)
         (s/assert (s/every keyword?) args)]}
  (let [args (map parse-arg args)]
    (if (some #{:new} args)
      (reset! allow-new? true))
    (loop [as (filter #(not (= :new %)) args)]
      (let [key (first as)
            file (-> key (name) (str ".csv"))
            rem (rest as)]
        (if (not (#{:personnel :schools :offices :headstarts :all} key))
          (throw (Exception. (str "Arguments must be one of: personnel, schools, offices, headstarts, or all, not " key))))
        (if (= key :all)
          (recur [:personnel :offices :schools :headstarts])
          (do (wp/set-target-urls key)
              (validate-args key file)
              (upload-data key file)
              (if (< 1 (count rem))
                (recur rem))))))))
