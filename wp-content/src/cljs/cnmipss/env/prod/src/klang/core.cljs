(ns klang.core)

(defn add-log!
  "Custom logger function to avoid klang DOM elements"
  [ns severity msg0 & msg]
  (let [meta (::meta-data msg0)
        msg (if (some? meta) (vec msg) (into [msg0] msg))]
    (case severity
      "INFO" (apply #(.info js/console "INFO: " %) msg)
      "WARN" (apply #(.warn js/console "WARN: " %) msg)
      "ERRO" (apply #(.error js/console "ERROR: " %) msg)
      "CRIT" (apply #(.error js/console "CRITICAL: " %) msg)
      "FATA" (apply #(.error js/console "FATAL: " %) msg)
      "TRAC" (apply #(.warn js/console "TRACES: " %) msg)
      (.log js/console ns severity msg))))
