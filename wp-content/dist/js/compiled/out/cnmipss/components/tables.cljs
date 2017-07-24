(ns cnmipss.components.tables
  (:require [cnmipss.components.forms :as forms]
            [cljs-time.core :as time]
            [cljs-time.format :as format]
            [re-frame.core :as rf]
            [clojure.string :refer [join]]))

(defn- filter-by
  [rows & ks]
  (filter
   (fn [row] (let [searches (clojure.string/split @(rf/subscribe [:search-text]) #" ")]
               (every? #(re-seq (re-pattern (str "(?i)" %))
                                (clojure.string/join " " (map row ks))) searches)))
   rows))

(defn table-row [row]
  (let [{:keys [last_name first_name cert_type cert_no start_date expiry_date mi]} row]
    [:tr.row.lookup-row 
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
    (for [row (doall (filter-by table :cert_no :first_name :last_name))]
      ^{:key (join " " (map row [:cert_no :first_name :last_name]))} [table-row row])]])

(defn- sort-certs
  [certs]
  (sort-by :cert_no certs))

(defn lookup-table [state]
  (let [table @(rf/subscribe [:table])]
    [:div
     [forms/search-bar "Search Certified Personnel"]
     [table-list (-> table js->clj clojure.walk/keywordize-keys
                  (filter-by :cert_no :first_name :last_name)
                  sort-certs)]]))


(defn parse-date
  [date]
  (format/parse (format/formatter "dd MMM YYYY") date))

(defn force-close?
  [{:keys [status close_date]}]
  (or (not status)
      (and close_date
           (time/after? (time/now) (parse-date close_date)))))

(defn jva-row [jva]
  (let [{:keys [status close_date]} jva]
    [:tr.row.jva-list-row {:class (if (force-close? jva) "closed")}
     [:td.col-xs-1 (jva :announce_no)]
     [:td.col-xs-2 (jva :position)]
     [:td.col-xs-1 (if (force-close? jva)
                [:em "Closed"]
                [:strong "Open"])]
     [:td.col-xs-1 (jva :open_date)]
     [:td.col-xs-1 (if close_date
                close_date
                "Until Filled")]
     [:td.col-xs-3 (jva :salary)]
     [:td.col-xs-2 (jva :location)]
     [:td.col-xs-1.text-center
      [:a {:href (jva :file_link)}
       [:button.btn.btn-info.jva-file-link {:title "Download"} [:i.fa.fa-download]]]]]))

(defn sort-jvas [jvas]
  (concat (->> jvas (filter (comp not force-close?)) (sort-by :announce_no) reverse)
          (->> jvas (filter force-close?) (sort-by :announce_no) reverse)))

(defn jva-list [table]
  [:table.lookup-list
   [:caption.sr-only "Job Vacancy List Table"]
   [:thead
    [:tr.row.jva-list-row
     [:th.col-xs-1.text-center {:scope "col"} "Number"]
     [:th.col-xs-2.text-center {:scope "col"} "Position/Title"]
     [:th.col-xs-1.text-center {:scope "col"} "Status"]
     [:th.col-xs-1.text-center {:scope "col"} "Opening Date"]
     [:th.col-xs-1.text-center {:scope "col"} "Closing Date"]
     [:th.col-xs-3.text-center {:scope "col"} "Salary"]
     [:th.col-xs-2.text-center {:scope "col"} "Location"]
     [:th.col-xs-1.text-center {:scope "col"} "Link"]]]
   [:tbody
    (for [jva (-> table js->clj clojure.walk/keywordize-keys
                  (filter-by :announce_no :position :location)
                  sort-jvas)]
      ^{:key (str "jva-" (jva :announce_no))} [jva-row jva])]])

(defn jva-table [state]
  (let [table @(rf/subscribe [:table])]
    [:div
     [forms/search-bar "Search Job Vacancies"]
     [jva-list table]]))
