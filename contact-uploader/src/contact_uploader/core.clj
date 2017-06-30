(ns contact-uploader.core
  (:require [clojure.data.csv :as csv]
            [clojure.data.json :as json]
            [clojure.string :refer [join trim]]
            [clojure.walk :as walk]
            [org.httpkit.client :as http]
            [cemerick.url :refer [url-encode]])
  (:gen-class))

(defn valid-email?
  [email]
  (let [pattern #"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"]
    (and (string? email) (re-matches pattern email))))

(defn parse-tel
  [tel]
  (if (> (count tel) 0)
    (str "(670) " tel)
    (identity tel)))

(defn parse-data
  [key data]
  (case key
    :offices ()
    :schools ()
    :personnel (let [[name
                      phone
                      cell
                      alt-tel
                      fax
                      email] data
                     tel [(parse-tel phone) (parse-tel cell) (parse-tel alt-tel)]]
                 {:name name
                  :fax (parse-tel fax)
                  :email email
                  :tel (->> tel
                            (filter #(and (= (type %) java.lang.String)
                                          (> (count (trim %)) 0)))
                            (join " / "))})
    (throw (Exception. "Invalid key.  Should be one of: :offices, :schools, or :personnel"))))

(defn post-info
  [data]
  (let [{name :name} data
        {body :body} @(http/get (str "http://localhost.test/wp-json/wp/v2/contact_info?per_page=50&search=" (url-encode name)))
        contacts (walk/keywordize-keys (json/read-str body))
        posted (filter #(= (get-in % [:title :rendered]) name) contacts)]
    (println posted)
    (println data)
    (identity data)))

(defn upload-data
  [key file]
  (as-> file data
   (csv/read-csv (slurp data))
   (filter #(valid-email? (last %)) data)
   (map #(parse-data key %) data)
   (sort #(compare (get-in %1 [:name])
                   (get-in %2 [:name]))
                    data)
   (map post-info data)
   (nth data 3)))

(defn validate-args
  [key file]
  (if (not= (type key) clojure.lang.Keyword)
    (throw (Exception. (str "Keys must be keywords: " key))))
  (if (not= (type file) java.lang.String)
    (throw (Exception. "Filenames must be strings: " file))))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (loop [as args]
    (let [key (first as)
          file (second as)
          rem (rest (rest as))]
      (validate-args key file)
      (upload-data key file)
      (if (< 1 (count rem))
        (recur rem)))))
  
