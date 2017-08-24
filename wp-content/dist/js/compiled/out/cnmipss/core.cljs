(ns cnmipss.core
  (:require [cnmipss.handlers.rf-events]
            [cnmipss.handlers.rf-subs]
            [cnmipss.views :refer [interactive-view]]
            [klang.core :refer-macros [info!]]
            [reagent.core :as r]
            [re-frame.core :as rf]
            axe-core))

(enable-console-print!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

(defn test-accessibility []
  (.run js/axe (fn [err data]
                 (if err (.error js/console err)
                     (let [{:keys [violations passes incomplete inapplicable]}
                           (-> data js->clj clojure.walk/keywordize-keys)]
                       (info! (str "Violations: " (count violations)))
                       (info! (str "Passes: " (count passes)))
                       (info! (str "Incomplete: " (count incomplete))))))))

(defn ^:export init!
  []
  (let [view (-> (.-pathname js/location) (clojure.string/replace #"/" "") keyword)]
    (when-let [target (.getElementById js/document "react-app")]
      (info! (str "Starting init! for " view))
      (rf/dispatch [:initialize-db])
      (rf/dispatch [:load-interactive-app view])
      (r/render [interactive-view] target))))

(init!)
 
