(ns contact-uploader.create
  (:require [contact-uploader.wordpress-api :as wp]
            [contact-uploader.util :refer :all]
            [clojure.string :refer [join]]))

(defn contact-info
  ([body fields]
   (contact-info nil body fields))
  ([id body fields]
   (let [{:keys [body]} (wp/post id body)
         {:keys [id code message data]} (json->edn body)]
     (if (nil? id)
       (throw (Exception. (str "\nBody: " body "\nStatus: " (:status data) "\nMessage: " message)))
       (wp/set-acf id fields)))))

(defn acf-fields
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
(defn- school-level-set
  [name]
  (cond
    (re-seq #"(?i)Head" name) ["54"]
    (re-seq #"(?i)Elem" name) ["51"]
    (re-seq #"(?i)Middle" name) ["50"]
    (re-seq #"(?i)jr" name) ["53"]
    (re-seq #"(?i)High" name) ["52"]
    :else nil))

(defn post
  [key data]
  (let [{name :name} data
        title (sanitize name)
        status "publish"
        level (school-level-set name)]
    (cond
      (#{:personnel :offices} key) (keyed [title status])
      (#{:schools :headstarts} key) (keyed [title status level]))))
