(ns cnmipss.handlers.re-frame
  (:require [cnmipss.db :as db]
            [re-frame.core :refer [dispatch reg-event-db]]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))

(reg-event-db
 :set-search-text
 (fn [db [_ text]]
   (assoc db :search-text text)))

(reg-event-db
 :load-table
 (fn [db [_ table]]
   (assoc db :table table)))

(reg-event-db
 :pns-subscribe
 (fn [db [_ announcement]]
   ;Display a modal w/ form to sign up for information about announcement
   (assoc db :pns-modal announcement)))

(reg-event-db
 :pns-subs-errors
 (fn [db [_ errors]]
   (assoc db :pns-subs-errors errors)))
