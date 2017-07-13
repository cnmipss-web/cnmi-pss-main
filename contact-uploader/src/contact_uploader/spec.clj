(ns contact-uploader.spec
  (:require [clojure.spec.alpha :as s]))

(s/def ::valid-tel? (s/and string?
                           (s/or :valid #(re-seq #"\d{3}\-\d{4}" %)
                                 :empty #(= "" %))))
