(ns cnmipss.core
  (:require [reagent.core :as r]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defonce state (r/atom {:search-text ""
                        :table [["Jim" (js/Date) "Level 1"]
                                ["John" (js/Date) "Level 1"]
                                ["Alice" (js/Date) "Level 2"]
                                ["George" (js/Date) "Level 1"]
                                ["Carol" (js/Date) "Level 3"]]}))

(defn set-search-text [event]
  (let [search (.-value (.getElementById js/document "search-certified"))]
    (reset! state {:search-text search
                    :table (:table @state)})))

(defn search-bar []
  [:div
   [:form {:role "search"}
    [:div.form-group
     [:label.sr-only {:for "search-certified"} "Search Certified Personnel"]
     [:input.form-control {:type "search"
                           :id "search-certified"
                           :placeholder "Search Certified Personnel"
                           :on-change set-search-text
                           :ref "search-certified"}]]]])

(defn table-row [row]
  [:tr.row.lookup-row
   ;; (for [col row]
   ;;   ^{:key col} [:td.col-xs-4
   ;;                [:p {:style {:textAlign "center"}} col]])

   [:th.col-xs-4 {:scope "row"}
    [:p {:style {:textAlign "center"}} (first row)]]
   (for [col (next row)]
     ^{:key col} [:td.col-xs-4
                  [:p {:style {:textAlign "center"}} col]])])

(defn table-list [table]
  [:table.lookup-list
   [:caption.sr-only "Certified Personnel Table"]
   [:summary.sr-only "This table lists records of CNMI Board of Education certifications for teachers and administrators.  Entering text in the search box above will filter the table to display only those records matching the search terms."]
   [:thead [:tr.row.lookup-row
            [:th.col-xs-4 {:scope "col"}  "Name"]
            [:th.col-xs-4 {:scope "col"}  "Date"]
            [:th.col-xs-4 {:scope "col"}  "Level"]]]
   [:tbody
    (for [row table]
      ^{:key (first row)} [table-row row])]])

(defn lookup-table [state]
  (let [search-text (:search-text @state)
        table (:table @state)
        pattern (re-pattern (str "(?i)" search-text))]
    [:div
     [search-bar]
     [table-list (filter #(not-empty (re-seq pattern (first %))) table)]]))


(defn path
  []
  (.-pathname js/location))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

(defn ^:export init!
  []
  (if (= (path) "/cnmi-certification-look-up-database/")
    (r/render [lookup-table state]
              (js/document.getElementById "certification-lookup"))))


(js/setTimeout #(
                 init!) 2000)
