(ns cnmipss.handlers.events
  (:require [cnmipss.validation :as v]
            [cnmipss.util :refer [keyed]]
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
          [{:keys [company person email tel] :as errors} values]
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
        ;Ajax to values to server
        ))))
