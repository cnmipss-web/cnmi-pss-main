(ns cnmipss.handlers.api
  (:require [re-frame.core :as rf]))

(defn subscribed [pns]
  (fn [[ok n]]
    (.log js/console "Results received..." ok n)
    (if (and ok (= 1 n))
      (rf/dispatch [:subscribed pns]))))
