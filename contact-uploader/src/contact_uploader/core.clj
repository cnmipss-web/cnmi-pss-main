(ns contact-uploader.core
  (:require [contact-uploader.validators :as v]
            [contact-uploader.constants :as const]
            [clojure.data.csv :as csv]
            [clojure.data.json :as json]
            [clojure.string :refer [join trim]]
            [clojure.walk :as walk]
            
            [environ.core :refer [env]]
            [org.httpkit.client :as http])
  (:gen-class))

;; Define Global State
(def auth-token (atom ""))
(def target-urls (atom {}))

(defn set-target-urls
  [key]
  (case key
    :personnel (reset! target-urls {:main const/contact-info-main
                                    :acf const/contact-info-acf})
    :offices (reset! target-urls {:main const/contact-info-main
                                  :acf const/contact-info-acf})
    :schools (reset! target-urls {:main const/school-main
                                  :acf const/school-acf})
    (throw (Exception. "Invalid key.  Should be one of: :offices, :schools, or :personnel"))))

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

(defn parse-tel
  [tel]
  (if (> (count tel) 0)
    (let [correct-pattern #"^\(\d{3}\)\s*\d{3}\-\d{4}$"
          fix-pattern #"(\(\d{3}\))?\s*(\d{3})\-([\d\/\-\s]{4,})"]
      (if (re-seq correct-pattern tel)
        (identity tel) ;; Already correctly formated
        (let [matches (first (re-seq fix-pattern tel))]
          (str const/area-code (nth matches 2) "-" (nth matches 3)))))
    (identity tel))) ;; Empty string

(defn parse-data
  [key data]
  (case key
    :offices (let [location (if (= "Capitol Hill" (nth data 2))
                              (str "Capitol Hill Bldg #" (first data))
                              (nth data 2))]
               {:name (second data)
                :location location
                :tel (nth data 3) ; Some weird data in source, so not trying to parse or correct.
                :fax (parse-tel (nth data 4))})
    :schools ()
    :personnel (let [[name phone cell alt-tel fax email] data
                     phone-nums [(parse-tel phone) (parse-tel cell) (parse-tel alt-tel)]]
                 {:name name
                  :fax (parse-tel fax)
                  :email email
                  :tel (->> phone-nums
                            (filter #(and (= (type %) java.lang.String)
                                          (> (count (trim %)) 0)))
                            (join ", "))})))

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
  [body fields]
  (println "Creating: " body)
  (let [headers {"Authorization" (str "Bearer " @auth-token)
                     "Content-Type" "application/json"}
            create {:url (str const/wp-host (:main @target-urls))
                     :method :post
                     :headers headers
                     :body body}]
        (let [{:keys [body error]} @(http/request create)
              id (get (json/read-str body) "id")]
          (if error
            (throw error)
            (set-acf id fields)))))

(defn post-info
  [data]
  (let [{name :name} data
        search-name (v/encode-name (subs name 0 (min (count name) 50)))
        {get-body :body} @(http/get (str const/wp-host (:main @target-urls) "?per_page=50&search=" search-name))
        contacts (walk/keywordize-keys (json/read-str get-body))
        posted (filter #(= (get-in % [:title :rendered]) name) contacts)
        body (json/write-str {:title name :status "publish"})
        fields {:address (:address data)
                :telephone (:tel data)
                :fax (:fax data)
                :email (:email data)
                :job_title (:job-title data)}]
    (if (> (count contacts) 0)
      (let [id (:id (first posted))]
        (println "Updating: " name)
        (set-acf id fields))
      (do
        ;(println contacts posted (url-encode name))
        ;(throw (Error. body))
        (create-contact-info body fields)))
    (identity data)))

(defn apply-filters
  [key data]
  (case key
    :personnel (filter #(v/valid-email? (last %)) data)
    :offices (filter #(and (> (count (trim (nth % 2))) 1)
                           (> (count (trim (first %))) 0)) data)))

(defn upload-data
  [key file]
  (authorize)
  (as-> file data
   (csv/read-csv (slurp data))
   (apply-filters key data)
   (map #(parse-data key %) data)
   (sort #(compare (get-in %1 [:name])
                   (get-in %2 [:name]))
                    data)
   (dorun (map post-info data))))

(defn validate-args
  [key file]
  (if (not= (type key) clojure.lang.Keyword)
    (throw (Exception. (str "Keys must be keywords: " key))))
  (if (not= (type file) java.lang.String)
    (throw (Exception. "Filenames must be strings: " file))))

(defn -main
  "Process CSV file and create WP Contact Info & School Posts from data"
  [& args]
  (loop [as args]
    (let [key (first as)
          file (second as)
          rem (rest (rest as))]
      (set-target-urls key)
      (validate-args key file)
      (upload-data key file)
      (if (< 1 (count rem))
        (recur rem)))))
  
