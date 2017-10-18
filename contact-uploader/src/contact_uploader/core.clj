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
            [contact-uploader.filter-data :refer [apply-filters]]
            [contact-uploader.create :as create]
            [clojure.tools.cli :refer [parse-opts]]
            [environ.core :refer [env]]
            [org.httpkit.client :as http])
  (:import (org.apache.commons.text StringEscapeUtils)
           (org.apache.commons.lang3 StringUtils))
  (:gen-class))

(def allow-new? (atom false))
(def delete-outdated? (atom false))

(defn post-info
  [key data]
  (let [existing-data (wp/existing key)
        {name :name} data
        search-name (v/encode-name (subs name 0 (min (count name) 50)))
        {get-body :body} (wp/search search-name)
        contacts (filter #(= (sanitize name) (sanitize (get-in % ["title" "rendered"])))
                         (json/read-str get-body))
        body (json/write-str (create/post key data))
        fields (create/acf-fields key data)]
    (if (> (count contacts) 0)
      (if (> (count contacts) 1)
        (throw (Exception. (str "Name collision: " (apply str contacts))))
        (let [id (get (first contacts) "id")]
          (println "Updating: " name id)
          (create/contact-info id  body fields)))
      (do
        (println "Creating: " body)
        (if @allow-new?
          (create/contact-info body fields)
          (throw (Exception. "No new entries unless specified with :new")))))
    (identity data)))

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

(defn global-settings
  [args]
  (if (some #{:new} args)
    (reset! allow-new? true))
  (if (some #{:delete-old} args)
    (reset! delete-outdated? true)))

(defn -main
  "Process CSV file and create WP Contact Info & School Posts from data"
  [& args]
  {:pre [(s/assert seq? args)
         (s/assert (s/every keyword?) args)]}
  (let [args (map parse-arg args)]
    (global-settings args)
    (loop [as (filter #(not= :new %) args)]
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
