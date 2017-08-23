(ns cnmipss.components.modals
  (:require [cnmipss.components.forms :as forms]
            [re-frame.core :as rf]
            [klang.core :refer-macros [info!]]))

(defn procurement-type
  [item]
  (if (:rfp_no item)
    "RFP"
    "IFB"))

(defn pns-modal
  []
  (let [pns @(rf/subscribe [:pns-modal])]
    (info! "Building pns-modal" pns @(rf/subscribe [:subscribed]))
    [:div#pns-modal.modal.fade {:role "dialog"
                                :tabIndex "-1"
                                :aria-labelledby "pns-modal-label"}
     [:div.modal-dialog {:role "document"}
      [:div.modal-content
       [:div.modal-header
        [:button.close {:data-dismiss "modal"
                        :aria-label "Close"}
         [:span {:aria-hidden "true"} "\u00d7"]]
        [:h2#pns-modal-label.modal-title {:tabIndex "-1"}
         (str "Requesting Information on " (procurement-type pns) " " (or (:rfp_no pns) (:ifb_no pns)) ":")
         [:br]
         (str (:title pns))]]
       [:div.modal-body
        [:p (str "Please enter your contact information below and click 'Subscribe' to request be notified of any addendums or additional information relevant to this " (procurement-type pns) ".  If you have any questions please contact PSS Procurement & Supply via any of the methods listed at the bottom of this page.")]
        [forms/pns-subscribe pns]]
       [:div.modal-footer
        [:div.col-xs-6
         (if (not (empty? (filter #(= (:id pns) (:id %)) @(rf/subscribe [:subscribed]))))
           [:p#subscription-success {:role "alert"} "You have successfully subscribed to this announcement."])
         (if-let [message @(rf/subscribe [:subscription-error])]
           [:p#subscription-error {:role "alert"} "Error: " message])]
        [:div.col-xs-6
         [:button.btn.btn-default {:data-dismiss "modal"} "Exit"]
         [:button#pns-subs-btn.btn.btn-primary {:type "submit" :form "pns-subscribe"} "Subscribe"]]]]]]))
