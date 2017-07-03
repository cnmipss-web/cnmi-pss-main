(ns contact-uploader.validators
  (:require [cemerick.url :refer [url-encode]]))

(defn valid-email?
  [email]
  (let [pattern #"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"]
    (and (string? email) (re-matches pattern email))))


(defn valid-tel?
  [tel]
  )

(defn encode-name
  [s]
  (as-> s name
    (url-encode name)
    (.replaceAll name "\\+" "%20")
    (.replaceAll name "\\%21" "!")
    (.replaceAll name "\\%27" "'")
    (.replaceAll name "\\%28" "(")
    (.replaceAll name "\\%29" ")")
    (.replaceAll name "\\%7E" "~")))
