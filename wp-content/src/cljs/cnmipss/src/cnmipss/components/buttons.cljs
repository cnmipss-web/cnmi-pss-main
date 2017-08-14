(ns cnmipss.components.buttons
  (:require [cnmipss.handlers.events :as events]
            [re-frame.core :as rf]))

(defn link-file
  [href text]
  [:a.btn.btn-info.table-link
   {:href href
    :target "_blank"
    :class (if (= (type "") (type text)) "full-width")}
   text])

(defn get-addendums
  [{:keys [id] :as pns}]
  (let [addenda (->> @(rf/subscribe [:page-data])
                    js->clj
                    clojure.walk/keywordize-keys
                    :addenda
                    (filter #(or (= id (:rfp_id %))
                                 (= id (:ifb_id %)))))]
    (if ((comp not empty?) addenda)
      [:button.btn.btn-warning.table-link.full-width
       {:onClick (events/download-addenda addenda)}
       (str (count addenda) " Addendums")])))
