(ns cnmipss.core
  (:require [cnmipss.handlers.re-frame]
            [cnmipss.handlers.rf-subs]
            [cnmipss.components.forms :as forms]
            [cnmipss.components.tables :as tables]
            [reagent.core :as r]
            [re-frame.core :as rf]))

(enable-console-print!)
(def jq js/jQuery)
(defn path []
  (.-pathname js/location))

(println "Loading...")


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

(defn ^:export init!
  []
  (case (path)
        "/cnmi-certification-look-up-database/"
        (-> jq
            (.get  "/webtools/api/all-certs"
                   (fn [data]
                     (rf/dispatch [:load-table data])
                     (r/render [tables/lookup-table]
                               (js/document.getElementById "certification-lookup")))))
        "/job-vacancy-announcements/"
        (-> jq
            (.get "/webtools/api/all-jvas"
                  (fn [data]
                    (rf/dispatch [:load-table data])
                    (r/render [tables/jva-table]
                              (js/document.getElementById "jva-table")))))
        (println "Path is" (path))))

 (init!)

