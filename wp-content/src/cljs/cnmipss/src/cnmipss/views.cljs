(ns cnmipss.views
  (:require [cnmipss.components.tables :as tables]
            [re-frame.core :as rf]
            [klang.core :refer-macros [info! erro!]]))

(defn ^:export interactive-view []
  (let [active-view @(rf/subscribe [:active-view])
        data @(rf/subscribe [:page-data])]
    (info! "Rendering interactive-view" active-view)
    (case active-view
      :cnmi-certification-look-up-database
      [tables/lookup-table data]

      :job-vacancy-announcements
      [tables/jva-table data]

      :contractors-and-vendors
      [tables/procurement-tables data]

      nil
      [:div#floatingCirclesG
       (for [i (range 1 9)]
         ^{:key (str "floating-circle-" i)}
         [:div.f_circleG {:id (str "frotateG_0" i)}])])))
