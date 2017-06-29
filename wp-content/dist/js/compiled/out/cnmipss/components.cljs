(ns cnmipss.components
  (:require ))

(def jq js/jQuery)

(defn set-search-text [event]
  (let [search (.-value (.getElementById js/document "search-certified"))]
    (reset! search-text search)))

(defn search-bar []
  [:div
   [:form
    [:div.form-group
     [:label.sr-only {:for "search-certified"} "Search Certified Personnel"]
     [:input.form-control {:type "text"
                           :id "search-certified"
                           :placeholder "Search Certified Personnel"
                           :onChange set-search-text
                           :ref "search-certified"}]]]])

(defn table-row [row]
  [:div.row
   (for [col row]
     ^{:key col} [:div.col-xs-4
                  [:p {:style {:textAlign "center"}} col]])])

(defn table-list [table]
  [:div (for [row table]
          ^{:key (first row)} [table-row row])])

(defn results [table]
  [:div.lookup-results
   (println (table-list table))])

(defn ^:export lookup-table [search-text table]
  (let [pattern (re-pattern @search-text)]
    [:div
     [search-bar]
     [table-list (filter #(not-empty (re-seq pattern (first %))) @table)]]))
