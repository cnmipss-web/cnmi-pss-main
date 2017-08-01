(ns cnmipss.components.forms
  (:require [cnmipss.events :as events]))

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
