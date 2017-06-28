(ns cnmipss.core
  (:require ))

(enable-console-print!)

(println "This text is printed from src/cnmipss/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))
(defonce jq js/jQuery)

(defn path
  []
  (.-pathname js/location))

(defn setup-reports
  []
  (println "Setting up reports...")
  (let [active (jq "li.active")]
    (.click active)))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

(defn init!
  []
  (identity 1))


(init!)
