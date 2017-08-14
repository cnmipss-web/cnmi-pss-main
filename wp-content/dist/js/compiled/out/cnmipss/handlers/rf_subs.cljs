(ns cnmipss.handlers.rf-subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :search-text
 (fn [db _]
   (:search-text db)))

(reg-sub
 :table
 (fn [db _]
   (:table db)))

(reg-sub
 :pns-modal
 (fn [db _]
   (:pns-modal db)))

(reg-sub
 :pns-subs-errors
 (fn [db _]
   (:pns-subs-errors db)))

(reg-sub
 :subscribed
 (fn [db _]
   (:pns-subscribed db)))
