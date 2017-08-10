(ns cnmipss.components.tables
  (:require [cnmipss.components.forms :as forms]
            [cnmipss.components.buttons :as buttons]
            [cnmipss.components.modals :as modals]
            [cljs-time.core :as time]
            [cljs-time.format :as format]
            [re-frame.core :as rf]
            [clojure.string :refer [join]]))

(defn- filter-by
  [rows & ks]
  (filter
   (fn [row] (let [search-text @(rf/subscribe [:search-text])
                   searches (clojure.string/split search-text #" ")]
               (every? #(re-seq (re-pattern (str "(?i)" %))
                                (clojure.string/join " " (map row ks))) searches)))
   rows))

(defn table-row [row]
  (let [{:keys [last_name first_name cert_type cert_no start_date expiry_date mi]} row]
    [:tr.row.lookup-row 
     [:th.col-xs-2 {:scope "row"}
      [:p.text-center (second (re-find #"(.*?)(\-renewal\-\d+)?$" cert_no))]]
     [:td.col-xs-2
      [:p.text-center last_name]]
     [:td.col-xs-2
      [:p.text-center (str first_name " " mi)]]
     [:td.col-xs-2
      [:p.text-center cert_type]]
     [:td.col-xs-2
      [:p.text-center start_date]]
     [:td.col-xs-2
      [:p.text-center expiry_date]]]))
 
(defn table-list [table]
  (let [th-props {:scope "col"}]
    [:table.lookup-list
     [:caption.sr-only "Certified Personnel Table"]
     [:thead
      [:tr.row.lookup-row
       [:th.col-xs-2.text-center th-props "Cert Number"]
       [:th.col-xs-2.text-center th-props "Last Name"]
       [:th.col-xs-2.text-center th-props "First Name"]
       [:th.col-xs-2.text-center th-props "Cert Type"]
       [:th.col-xs-2.text-center th-props "Effective Date"]
       [:th.col-xs-2.text-center th-props "Expiration Date"]]]
     [:tbody
      (if (< 0 (count @(rf/subscribe [:search-text])))
        (for [row (doall (filter-by table :cert_no :first_name :last_name))]
          ^{:key (join " " (map row [:cert_no :first_name :last_name]))} [table-row row]))]]))

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
  (try
    (format/parse (format/formatter "MMMM dd, YYYY") date)
    (catch :default e
      (let [parser (partial format/parse (format/formatter "MMMM dd, YYYY h:mm a"))]
        (-> date
            (clojure.string/replace #"at" "")
            (clojure.string/replace #"\s+" " ")
            (parser))))))

(defn force-close?
  [{:keys [status close_date]}]
  (or (not status)
      (and close_date
           (time/after? (time/now) (parse-date close_date)))))

(defn jva-row [jva]
  (let [{:keys [status close_date]} jva]
    [:tr.row.jva-list-row {:class (if (force-close? jva) "closed")}
     [:th.col-xs-1 {:scope "row"
                    :role "rowheader"} (jva :announce_no)]
     [:td.col-xs-2 (jva :position)]
     [:td.col-xs-1.text-center
      (if (force-close? jva)
        [:em "Closed"]
        [:strong "Open"])]
     [:td.col-xs-1 (jva :open_date)]
     [:td.col-xs-1
      (if close_date
        close_date
        "Until Filled")]
     [:td.col-xs-3 (jva :salary)]
     [:td.col-xs-2 (jva :location)]
     [:td.col-xs-1.text-center
      [:a.btn.btn-info.table-link {:href (jva :file_link)}
       [:span.sr-only "Download"]
       [:i.fa.fa-download]]]]))

(defn sort-jvas [jvas]
  (concat (->> jvas (filter (comp not force-close?)) (sort-by :announce_no) reverse)
          (->> jvas (filter force-close?) (sort-by :announce_no) reverse)))

(defn jva-list [table]
  (let [th-props {:scope "col"}]
    [:table.lookup-list
     [:caption.sr-only "Job Vacancy List Table"]
     [:tbody
      [:tr.row.jva-list-row
       [:th.col-xs-1.text-center th-props "Number"]
       [:th.col-xs-2.text-center th-props "Position/Title"]
       [:th.col-xs-1.text-center th-props "Status"]
       [:th.col-xs-1.text-center th-props "Opening Date"]
       [:th.col-xs-1.text-center th-props "Closing Date"]
       [:th.col-xs-3.text-center th-props "Salary"]
       [:th.col-xs-2.text-center th-props "Location"]
       [:th.col-xs-1.text-center th-props "Link"]]
      (for [jva (-> table js->clj clojure.walk/keywordize-keys 
                    (filter-by :announce_no :position :location)
                    sort-jvas)]
        ^{:key (str "jva-" (:announce_no jva))} [jva-row jva])]]))

(defn jva-table [state]
  (let [table @(rf/subscribe [:table])]
    [:div
     [forms/search-bar "Search Job Vacancies"]
     [jva-list table]]))


(defn pns-announcement-row
  [row]
  [:tr.row.jva-list-row {:class (if (force-close? row) "closed")}
   [:td.col-xs-1.text-center (or (:rfp_no row) (:ifb_no row))]
   [:td.col-xs-1 (:open_date row)]
   [:td.col-xs-1 (:close_date row)]
   [:td.col-xs-3 (:title row)]
   [:td.col-xs-4 (-> row :description (subs 0 140) (str "..."))]
   (if (force-close? row)
     [:td.col-xs-2 [:p.text-center [:em "Closed"]]]
     [:td.col-xs-2
      [buttons/link-file (:file_link row) "Full Announcement"]
      [:br]
      [buttons/get-addendums row]
      [:button.btn.btn-primary.table-link.full-width
       {:on-click #(rf/dispatch [:pns-subscribe row])
        :data-toggle "modal"
        :data-target "#pns-modal"
        :aria-controls "pns-modal"} "Subscribe"]])])

(defn pns-announcement-table
  [k table]
  (let [th-props {:scope "col"}
        data (get table k)]
    [:table.col-xs-12.lookup-list
     [:caption (if (= :rfps k)
                 "Requests for Proposals"
                 "Invitations for Bids")]
     [:thead
      [:tr.row.jva-list-row
       [:th.col-xs-1.text-center th-props "Number"]
       [:th.col-xs-1.text-center th-props "Open Date"]
       [:th.col-xs-1.text-center th-props "Close Date"]
       [:th.col-xs-3.text-center th-props "Title"]
       [:th.col-xs-4.text-center th-props "Description"]
       [:th.col-xs-2.text-center th-props "Links"]]]
     [:tbody
      (for [row data]
        ^{:key (str "pns-" (:id row))} [pns-announcement-row (assoc row :status true)])]]))
 

(defn procurement-tables
  []
  (let [table (-> @(rf/subscribe [:table]) js->clj clojure.walk/keywordize-keys)]
    [:div
     [modals/pns-modal]
     [pns-announcement-table :rfps table]
     [pns-announcement-table :ifbs table]]))
