(ns cnmipss.handlers.events
  (:require [cnmipss.validation :as v]
            [cnmipss.util :refer [edn->json full-response-format]]
            [cnmipss.handlers.api :as handle-api]
            [struct.core :as st]
            [ajax.core :as ajax]
            [re-frame.core :as rf]))

(defn set-search-text [event]
  (let [search (.-value (.getElementById js/document "search-certified"))]
    (rf/dispatch [:set-search-text search])))

(defn pns-focus-invalid
  []
  (let [{:keys [company person email tel]} @(rf/subscribe [:pns-subs-errors])]
    (cond
      (some? company)
      (-> "pns-subs-cn" js/document.getElementById .focus)
      (some? person)
      (-> "pns-subs-cp" js/document.getElementById .focus)
      (some? email)
      (-> "pns-subs-em" js/document.getElementById .focus)
      (some? tel) 
      (-> "pns-subs-tel" js/document.getElementById .focus))))

(defn pns-subscription [pns]
  (fn [e]
    (.preventDefault e)
    (let [jq js/jQuery
          company (-> "#pns-subs-cn" jq .val)
          person (-> "#pns-subs-cp" jq .val)
          email (-> "#pns-subs-em" jq .val)
          tel (-> "#pns-subs-tel" jq .val)
          [errors values]
          (st/validate {:company company
                        :person person
                        :email email
                        :tel tel}
                       {:company [st/required st/string]
                        :person [st/required st/string]
                        :email [v/email?]
                        :tel [v/tel?]})]
      (rf/dispatch [:pns-subs-errors errors])
      (if (some? errors)
        (pns-focus-invalid)
        (ajax/ajax-request {:uri "/webtools/api/subscribe-procurement"
                            :method :post
                            :params (edn->json {:company company
                                                :person person
                                                :email email
                                                :tel tel
                                                :rfp_id (if (:rfp_no pns) (:id pns))
                                                :ifb_id (if (:ifb_no pns) (:id pns))})
                            :format (ajax/json-request-format)
                            :response-format (full-response-format ajax/json-response-format)
                            :handler (handle-api/subscribed pns)})))))

(defn download-addenda
  [items]
  (fn []
    (let [jq js/jQuery
          item (first items)
          r (next items)
          a  (-> "a" js/document.createElement jq
                 (.attr "href" (:file_link item))
                 (.attr "target" "_blank"))] 
      (-> "body" jq (.append a))
      (-> a (aget 0) (.click))
      (.remove a)
      (if (not (empty? r))
        (js/setTimeout (download-addenda r) 500)))))
