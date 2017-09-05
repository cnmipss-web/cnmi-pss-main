(ns axe-core)

;; Dummy file for production
(def ^:export axe (js-obj :run (fn [f])))
(set! js/axe axe)
