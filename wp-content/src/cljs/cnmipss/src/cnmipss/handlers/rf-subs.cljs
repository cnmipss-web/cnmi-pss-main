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
