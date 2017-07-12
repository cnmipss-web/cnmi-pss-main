(ns cnmipss.components
  (:require ))

(def jq js/jQuery)

(defn set-search-text [event]
  (let [search (.-value (.getElementById js/document "search-certified"))]
    (swap! state assoc-in [:search-text] search)))

(defn search-bar []
  [:div#search-box
   [:form {:role "search"}
    [:div.form-group
     [:label.sr-only {:for "search-certified"} "Search Certified Personnel"]
     [:input.form-control {:type "search"
                           :id "search-certified"
                           :placeholder "Search Certified Personnel"
                           :on-change set-search-text
                           :ref "search-certified"}]]]])

(defn display-row [row search-text]
  (let [searches (clojure.string/split search-text #" ")
        {:keys [last_name first_name cert_no]} row]
    (every? #(re-seq (re-pattern (str "(?i)" %))
                          (str last_name " " first_name " " cert_no)) searches)))

(defn table-row [row search-text]
  (let [{:keys [last_name first_name cert_type cert_no start_date expiry_date mi]} row]
    [:tr.row.lookup-row {:style {:display (display-row row search-text)}}
     [:td.col-xs-2
      [:p.text-center last_name]]
     [:td.col-xs-2
      [:p.text-center (str first_name " " mi)]]
     [:td.col-xs-2
      [:p.text-center cert_type]]
     [:td.col-xs-2
      [:p.text-center cert_no]]
     [:td.col-xs-2
      [:p.text-center start_date]]
     [:td.col-xs-2
      [:p.text-center expiry_date]]]))
 
(defn table-list [table]
  [:table.lookup-list
   [:caption.sr-only "Certified Personnel Table"]
   [:summary.sr-only "This table lists records of CNMI Board of Education certifications for teachers and administrators.  Entering text in the search box above will filter the table to display only those records matching the search terms.  You may search by name or by certification number."]
   [:thead
    [:tr.row.lookup-row
     [:th.col-xs-2.text-center {:scope "col"} "Last Name"]
     [:th.col-xs-2.text-center {:scope "col"} "First Name"]
     [:th.col-xs-2.text-center {:scope "col"} "Cert Type"]
     [:th.col-xs-2.text-center {:scope "col"} "Cert No"]
     [:th.col-xs-2.text-center {:scope "col"} "Effective Date"]
     [:th.col-xs-2.text-center {:scope "col"} "Expiration Date"]]]
   [:tbody
    (for [row table]
      ^{:key (get row :cert_no)} [table-row row search-text])]])

(defn lookup-table [state]
  (let [search-text (:search-text @state)
        table (:table @state)]
    [:div
     [search-bar]
     [table-list
      (->> table
           js->clj
           clojure.walk/keywordize-keys
           (filter #(and (every? (fn [el] (string? (second el))) %)
                         (display-row %)))
           (reverse))
      search-text]]))
