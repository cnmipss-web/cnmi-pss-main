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
(defn check-validity
  [k id]
  (fn []
    (let [existing-errors @(rf/subscribe [:pns-subs-errors])
          [errors values] (events/validate-subscription)
          new-errors (assoc existing-errors k (get errors k))]
      (println existing-errors errors new-errors)
      (if (and (> (-> (str "#" id) js/jQuery .val .-length) 0)
               (some? existing-errors))
        (rf/dispatch [:pns-subs-errors new-errors])
        (if (-> @(rf/subscribe [:pns-subs-errors])
                (get k)
                (some?))
          (rf/dispatch [:pns-subs-errors new-errors]))))))

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
         (let [id "pns-subs-cn"]
           [:div.form-group
            [:label {:for id} "Company Name " [:span company]]
            [:input.form-control {:id id
                                  :name "company-name"
                                  :type "text"
                                  :aria-invalid (some? company)
                                  :on-change (check-validity :company id)}]])
         (let [id "pns-subs-cp"]           
           [:div.form-group
            [:label {:for id} "Contact Person " [:span person]]
            [:input.form-control {:id id
                                  :name "contact-person"
                                  :type "text"
                                  :aria-invalid (some? person)
                                  :on-change (check-validity :person id)}]])
         (let [id "pns-subs-em"]
           [:div.form-group
            [:label {:for id } "Email " [:span email]]
            [:input.form-control {:id id
                                  :name "email"
                                  :type "email"
                                  :aria-invalid (some? email)
                                  :on-change (check-validity :email id)}]])
         (let [id "pns-subs-tel"]
           [:div.form-group
            [:label {:for id} "Phone Number " [:span tel ]]
            [:input.form-control {:id id
                                  :name "telephone"
                                  :type "tel"
                                  :aria-invalid (some? tel)
                                  :on-change (check-validity :tel id)}]])]))}))
