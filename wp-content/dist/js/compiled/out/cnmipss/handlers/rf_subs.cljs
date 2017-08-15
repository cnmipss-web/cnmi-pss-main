(ns cnmipss.handlers.rf-subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :db
 (fn [db _]
   db))

(reg-sub
 :active-view
 (fn [db _]
   (:active-view db)))

(reg-sub
 :search-text
 (fn [db _]
   (:search-text db)))

(reg-sub
 :page-data
 (fn [db _]
   (:page-data db)))

(reg-sub
 :pns-modal
 (fn [db _]
   (:pns-modal db)))

(reg-sub
 :subscription-error
 (fn [db _]
   (:subscription-error db)))

(reg-sub
 :pns-subs-errors
 (fn [db _ ]
   (:pns-subs-errors db)))

(reg-sub
 :subscribed
 (fn [db _]
   (:subscribed db)))
