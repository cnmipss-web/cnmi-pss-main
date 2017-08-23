(ns cnmipss.handlers.rf-events
  (:require [cnmipss.db :as db]
            [ajax.core :as ajax]
            [klang.core :refer-macros [info!]]
            [re-frame.core :refer [dispatch reg-event-db]]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))

(reg-event-db
 :load-interactive-app
 (fn [db [_ path]]
   (let [opts {:cnmi-certification-look-up-database "/webtools/api/all-certs"
               :job-vacancy-announcements "/webtools/api/all-jvas"
               :contractors-and-vendors "/webtools/api/all-procurement"}]
     (ajax/GET (get opts path)
               {:handler
                (fn [data]
                  (info! (str "GET " (get opts path) " returned") data)
                  (dispatch [:store-data data]))}))
   (info! "Setting active-view: " path)
   (assoc db :active-view path)))

(reg-event-db
 :set-active-view
 (fn [db [_ view] ]
   (assoc db :active-view view)))

(reg-event-db
 :set-search-text
 (fn [db [_ text]]
   (assoc db :search-text text)))

(reg-event-db
 :store-data
 (fn [db [_ table]]
   (assoc db :page-data table)))

(reg-event-db
 :pns-subscribe
 (fn [db [_ announcement]]
   (assoc db :pns-modal announcement)))

(reg-event-db
 :pns-subs-errors
 (fn [db [_ errors]]
   (assoc db :pns-subs-errors errors)))

(reg-event-db
 :subscription-error
 (fn [db [_ error]]
   (assoc db :subscription-error error)))

(reg-event-db
 :subscribed
 (fn [db [_ pns]]
   (info! "Subscribed to" pns)
   (if-let [list (:subscribed db)]
     (assoc db :subscribed (conj list pns))
     (assoc db :subscribed [pns]))))
