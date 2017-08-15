(ns cnmipss.handlers.api
  (:require [re-frame.core :as rf]
            [klang.core :refer-macros [info!]]))

(defn subscribed [pns]
  (fn [[ok res]]
    (let [jq js/jQuery]
      (info! "Subscribed: " ok res)
      (if ok
        (rf/dispatch [:subscribed pns])
        (let [message (-> res
                          clojure.walk/keywordize-keys
                          (get-in [:response :body :message])
                          clojure.string/capitalize)]
          (rf/dispatch [:subscription-error message]))))))
