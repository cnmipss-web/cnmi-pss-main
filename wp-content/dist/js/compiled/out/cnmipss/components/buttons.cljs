(ns cnmipss.components.buttons)

(defn link-file
  [href text]
  [:a.btn.btn-info.table-link
   {:href href
    :class (if (= (type "") (type text)) "full-width")}
   text])

(defn get-addendums
  [{:keys [rfp_no ifb_no] :as pns}]
  ;Ajax to server get list of file links

  ;Download all
  )
