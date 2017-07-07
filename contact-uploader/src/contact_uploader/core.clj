(ns contact-uploader.core
  (:require [contact-uploader.validators :as v]
            [contact-uploader.spec :as spec]
            [clojure.spec.alpha :as s]
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
    :headstarts (reset! target-urls {:main const/school-main
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
  (if (and (> (count tel) 0) (re-seq #"\d" tel))
    (let [correct-pattern #"^\(\d{3}\)\s*\d{3}\-\d{4}$"
          fix-pattern #"(\(\d{3}\))?\s*(\d{3})\-([\d\/\-\s]{4,})"]
      (if (re-seq correct-pattern tel)
        (identity tel) ;; Already correctly formated
        (let [matches (first (re-seq fix-pattern tel))]
          (str const/area-code (nth matches 2) "-" (nth matches 3)))))
    (identity ""))) ;; Empty string

(s/fdef parse-tel
        :args (s/and (s/cat :tel string?)
                     #(re-seq #"\d+" (:tel %)))
        :ret string?
        :fn (s/or #(re-seq #"\(670\) \d\d\d\-\d\d\d\d" (:ret %))
                  #(= "" (:ret %))))

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
    :personnel (let [[name phone cell alt-tel fax email] data
                     phone-nums [(parse-tel phone) (parse-tel cell) (parse-tel alt-tel)]]
                 {:name name
                  :fax (parse-tel fax)
                  :email email
                  :tel (->> phone-nums
                            (filter #(and (= (type %) java.lang.String)
                                          (> (count (trim %)) 0)))
                            (join ", "))})))


(defn reduce-schools
  [school-list next-line]
  (if (= clojure.lang.PersistentVector (type (first school-list)))
    (if (re-seq #"\d" (first next-line))
      (conj school-list [next-line])
      (let [curr (conj (last school-list) next-line)]
        (conj (pop school-list) curr)))
    [[next-line]]))


(defn parse-school
  [school]
  {:name (get-in school [0 1])
   :short (get-in school [1 0])
   :address (join "\r\n" [(get-in school [1 1]) (get-in school [2 1]) (get-in school [3 1])])
   :fax (parse-tel (get-in school [0 4]))
   :tel (parse-tel (get-in school [0 3]))
   :staff (map (fn [row] {:name (get row 2)
                          :tel (->> [(get row 3) (get row 5)]
                                 (filter #(> (count %) 0))
                                 (map parse-tel)
                                 (join ", "))
                          :email (get row 6)}) school)})

(defn parse-headstart
  [head-start]
  {:name (get-in head-start [0 1])
   :coord {:name (get-in head-start [1 4])
           :tel (parse-tel (get-in head-start [1 5]))
           :email (get-in head-start [1 6])}
   :staff (map (fn [row] (if (> (count (get row 2)) 0)
                           {:name (get row 2)
                            :tel (->> [(get row 3) (get row 5)]
                                      (filter #(> (count %) 0))
                                      (map parse-tel)
                                      (join ", "))
                            :email (get row 6)})) head-start)})

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
  ([body fields] (create-contact-info nil body fields))
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
  (case key
    :personnel {:address (:address data)
                :telephone (:tel data)
                :fax (:fax data)
                :email (:email data)
                :job_title (:job-title data)}
    :offices {:address (:address data)
                :telephone (:tel data)
                :fax (:fax data)
                :email (:email data)
                :job_title (:job-title data)}
    :schools {:address (:address data)
              :fax (:fax data)
              :long_name (:name data)
              
              :short_name (:short data)
              :telephone (:tel data)
              :website "https://cnmipss.org"
              :email (:email data)
              :admin_staff (->> (:staff data)
                                (filter #(> (count (:name %)) 0))
                                (map (fn [{:keys [name, tel, email]}]
                                       (join "\r\n" [name, (str "Tel: " tel), (str "Email: " email)])))
                                (join "\r\n\r\n"))}
    :headstarts {:long_name (:name data)
                 :short_name (:name data)
                 :telephone (get-in data [:coord :tel])
                 :admin_staff (->> (:staff data)
                                (filter #(> (count (:name %)) 0))
                                (map (fn [{:keys [name, tel, email]}]
                                       (join "\r\n" [name, (str "Tel: " tel), (str "Email: " email)])))
                                (cons (join "\r\n" [(str (get-in data [:coord :name]) ", Site Coordinator")
                                                    (str "Tel: " (get-in data [:coord :tel]))
                                                    (str "Email: " (get-in data [:coord :email]))]))
                                (join "\r\n\r\n"))}))

(defn create-post-info
  [key data]
  (let [{name :name} data]
    (case key
      :personnel {:title name :status "publish"}
      :offices {:title name :status "publish"}
      :schools {:title name :status "publish"
                :level (let [name (:name data)]
                         (cond
                           (re-seq #"(?i)Elem" name) ["51"]
                           (re-seq #"(?i)Middle" name) ["50"]
                           (re-seq #"(?i)jr" name) ["53"]
                           (re-seq #"(?i)High" name) ["52"]
                           :else (throw (Exception. (str "Unknown school type: " name)))))}
      :headstarts {:title name :status "publish"
                   :level ["54"]})))

(defn post-info
  [key data]
  (let [{name :name} data
        search-name (v/encode-name (subs name 0 (min (count name) 50)))
        {get-body :body} @(http/get (str const/wp-host (:main @target-urls) "?per_page=50&search=" search-name))
        contacts (walk/keywordize-keys (json/read-str get-body))
        posted (filter #(= (get-in % [:title :rendered]) name) contacts)
        body (json/write-str (create-post-info key data))
        fields (create-acf-fields key data)]
    (if (> (count contacts) 0)
      (let [id (:id (first posted))]
        (println "Updating: " name)
        (create-contact-info id  body fields))
      (do
        (println "Creating: " body)
        (create-contact-info body fields)))
    (identity data)))

(defn apply-filters
  [key data]
  (case key
    :personnel (filter #(v/valid-email? (last %)) data)
    :offices (filter #(and (> (count (trim (nth % 2))) 1)
                           (> (count (trim (first %))) 0)) data)
    :schools (reduce reduce-schools data)
    :headstarts (reduce reduce-schools data)))

(defn upload-data
  [key file]
  (authorize)
  (as-> file data
   (csv/read-csv (slurp data))
   (apply-filters key data)
   (cond 
     (= key :schools) (map #(parse-school %) data)
     (= key :headstarts)  (map #(parse-headstart %) data)
     :else (map #(parse-data key %) data))
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
  (loop [as args]
    (let [key (first as)
          file (second as)
          rem (rest (rest as))]
      (set-target-urls key)
      (validate-args key file)
      (upload-data key file)
      (if (< 1 (count rem))
        (recur rem)))))
  
