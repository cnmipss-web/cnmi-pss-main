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
            [environ.core :refer [env]]
            [org.httpkit.client :as http])
  (:import (org.apache.commons.text StringEscapeUtils)
           (org.apache.commons.lang3 StringUtils))
  (:gen-class))

;; Define Global State
(def auth-token (atom ""))
(def target-urls (atom {}))
(def allow-new? (atom false))

(defn set-target-urls
  [key]
  {:pre [(s/assert keyword? key)]}
  (reset! target-urls (get const/target-urls key)))

(defn authorize
  []
  (let [{:keys [status body error]}
        @(http/post (str const/wp-host const/token-route)
                    {:headers {"Content-Type" "application/json"}
                     :body (json/write-str {:username (env :admin-username)
                                            :password (env :admin-password)})})]
    (if error
      (throw error)
      (reset! auth-token (get (json/read-str body) "token")))))


(defn reduce-schools
  [school-list next-line]
  (if (= clojure.lang.PersistentVector (type (first school-list)))
    (if (re-seq #"\d" (first next-line))
      (conj school-list [next-line])
      (let [curr (conj (last school-list) next-line)]
        (conj (pop school-list) curr)))
    [[next-line]]))


(defn set-acf
  [id fields]
  (let [headers {"Authorization" (str "Bearer " @auth-token)
                 "Content-Type" "application/json"}
        add-fields {:url (str const/wp-host (:acf @target-urls) id)
                    :method :post
                    :body (json/write-str {:fields fields})
                    :headers headers}]
    (http/request add-fields)))

(defn create-contact-info
  ([body fields]
   (create-contact-info nil body fields))
  ([id body fields]
   (let [headers {"Authorization" (str "Bearer " @auth-token)
                  "Content-Type" "application/json"}
         create {:url (str const/wp-host (:main @target-urls) (str "/" id))
                 :method :post
                 :headers headers
                 :body body}]
     (let [{:keys [body error]} @(http/request create)
           id (get (json/read-str body) "id")]
       (if error
         (throw error)
         (set-acf id fields))))))

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
  (let [{name :name} data
        search-name (v/encode-name (subs name 0 (min (count name) 50)))
        {get-body :body} @(http/get (str const/wp-host (:main @target-urls) "?per_page=50&search=" search-name))
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
  (cond
    (#{:personnel} key) (filter #(v/valid-email? (last %)) data)
    (#{:offices} key) (filter #(and (> (count (trim (nth % 2))) 1)
                                 (> (count (trim (first %))) 0)) data)
    (#{:schools :headstarts} key) (reduce reduce-schools data)))

(defn upload-data
  [key file]
  (authorize)
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

(defn -main
  "Process CSV file and create WP Contact Info & School Posts from data"
  [& args]
  {:pre [(s/assert seq? args)
         (s/assert (s/every keyword?) args)]}
  (if (some #{:new} args)
    (reset! allow-new? true))
  (loop [as (filter #(not (= :new %)) args)]
    (let [key (first as)
          file (-> key (name) (str ".csv"))
          rem (rest as)]
      (if (not (#{:personnel :schools :offices :headstarts :all} key))
        (throw (Exception. "Arguments must be one of: :personnel :schools :offices :headstarts :all")))
      (if (= key :all)
        (recur [:personnel :offices :schools :headstarts])
        (do (set-target-urls key)
            (validate-args key file)
            (upload-data key file)
            (if (< 1 (count rem))
              (recur rem)))))))
