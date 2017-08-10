(ns cnmipss.components.forms
  (:require [cnmipss.handlers.events :as events]
            [cnmipss.validation :as v]
            [re-frame.core :as rf]
            [reagent.core :as r]))

(defn search-bar [label]
  [:div#search-box
   [:form {:role "search"}
    [:div.form-group
     [:label.sr-only {:for "search-certified"} label]
     [:input.form-control {:type "search"
                           :id "search-certified"
                           :placeholder label
                           :on-change events/set-search-text
                           :ref "search-certified"}]]]])

(defn pns-subscribe
  [pns]
  (r/create-class
   {:component-did-update
    events/pns-focus-invalid
    
    :display-name "pns-subscribe"

    :reagent-render
    (fn [pns]
      (let [{:keys [company person email tel] :as errors} @(rf/subscribe [:pns-subs-errors])]
        [:form#pns-subscribe.cnmipss-form
         {:on-submit (events/pns-subscription pns)}
         [:div.form-group
          [:label {:for "pns-subs-cn"} "Company Name " [:span company]]
          [:input.form-control {:id "pns-subs-cn"
                                :name "company-name"
                                :type "text"
                                :aria-invalid (some? company)}]]
         [:div.form-group
          [:label {:for "pns-subs-cp"} "Contact Person " [:span person]]
          [:input.form-control {:id "pns-subs-cp"
                                :name "contact-person"
                                :type "text"
                                :aria-invalid (some? person)}]]
         [:div.form-group
          [:label {:for "pns-subs-em"} "Email " [:span email]]
          [:input.form-control {:id "pns-subs-em"
                                :name "email"
                                :type "email"
                                :aria-invalid (some? email)}]]
         [:div.form-group
          [:label {:for "pns-subs-tel"} "Phone Number " [:span tel ]]
          [:input.form-control {:id "pns-subs-tel"
                                :name "telephone"
                                :type "tel"
                                :aria-invalid (some? tel)}]]]))}))
