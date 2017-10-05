(ns contact-uploader.wordpress-api
  (:require [org.httpkit.client :as http]
            [environ.core :refer [env]]
            [clojure.spec.alpha :as s]
            [clojure.data.json :as json]
            [contact-uploader.constants :as const]))

(def auth-token (atom ""))
(def target-urls (atom {}))

(defn set-target-urls
  [key]
  {:pre [(s/assert keyword? key)]}
  (reset! target-urls (get const/target-urls key)))

(defn authorize
  []
  (let [{:keys [status body error]}
        @(http/post (str const/wp-host const/token-route)
                    {:headers {"Content-Type" "application/json"}
                     :body (json/write-str {:username (env :wp-un)
                                            :password (env :wp-pw)})})]
    (if error
      (throw error)
      (reset! auth-token (get (json/read-str body) "token")))))

(defn post
  [id body]
  (let [headers {"Authorization" (str "Bearer " @auth-token)
                 "Content-Type" "application/json"}]
    @(http/request {:url (str const/wp-host (:main @target-urls) (str "/" id))
                    :method :post
                    :headers headers
                    :body body})))

(defn set-acf
  [id fields]
  (let [headers {"Authorization" (str "Bearer " @auth-token)
                 "Content-Type" "application/json"}
        add-fields {:url (str const/wp-host (:acf @target-urls) id)
                    :method :post
                    :body (json/write-str {:fields fields})
                    :headers headers}
        {:keys [body status headers opts]} @(http/request add-fields)]
    (if-not (= 200 status)
      (throw (Exception. (str "Error creating ACF Fields for " opts body))))))

(defn search
  [query]
  @(http/get (str const/wp-host (:main @target-urls) "?per_page=50&search=" query)))
