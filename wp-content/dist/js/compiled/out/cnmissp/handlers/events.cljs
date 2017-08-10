(ns cnmissp.handlers.events
  (:require [ajax.core :as ajax]
            [re-frame.core :as rf]))

(defn set-search-text [event]
  (let [search (.-value (.getElementById js/document "search-certified"))]
    (rf/dispatch [:set-search-text search])))

(defn pns-subscription [pns]
  (fn []
    (let [jq js/jQuery
          company (-> "#pns-subs-cn" jq .val)
          person (-> "#pns-subs-cp" jq .val)
          email (-> "#pns-subs-em" jq .val)
          tel (-> "#pns-subs-twl" jq .val)]
      (println company person email tel))))
