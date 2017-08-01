(ns contact-uploader.util
  (:require [clojure.data.json :as json]
            [clojure.string :refer [trim]]
            [clojure.walk :as walk])
  (:import (org.apache.commons.text StringEscapeUtils)))

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

(defn- sanitize-dashes
  [str]
  (.replaceAll str "\\p{Pd}", "-"))

(defn- sanitize-single-quotes
  [str]
  (.replaceAll str "\u2019" "\u0027"))

(defn sanitize
  [str]
  (-> str
      (StringEscapeUtils/unescapeHtml4)
      (trim)
      (sanitize-single-quotes)
      (sanitize-dashes)))
