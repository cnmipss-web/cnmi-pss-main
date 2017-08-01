(ns cnmipss.events
  (:require [re-frame.core :as rf]))

(defn set-search-text [event]
  (let [search (.-value (.getElementById js/document "search-certified"))]
    (rf/dispatch [:set-search-text search])))
