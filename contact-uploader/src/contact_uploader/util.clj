(ns contact-uploader.util
  (:require [clojure.data.json :as json]
            [clojure.walk :as walk]))

(def json->edn
  (comp walk/keywordize-keys json/read-str))

(def edn->json
  (comp json/write-str))

(let [transforms {:keys keyword
                  :strs str
                  :syms identity}]
  (defmacro keyed
      "Create a map in which, for each symbol S in vars, (keyword S) is a
  key mapping to the value of S in the current scope. If passed an optional
  :strs or :syms first argument, use strings or symbols as the keys instead."
    ([vars] `(keyed :keys ~vars))
    ([key-type vars]
       (let [transform (comp (partial list `quote)
                             (transforms key-type))]
         (into {} (map (juxt transform identity) vars))))))
