(ns cnmipss.validation
  (:require [struct.core :as st]))

(def email?
  {:message "Must be a valid email address"
   :optional false
   :validate #(some? (re-find #"^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$" %))})

(def tel?
  {:message "Must be a valid telephone number"
   :optional false
   :validate #(some? (re-find #"^(\+\d{1,2}\s)?(\(?\d{3}\)?)?[\s.-]?\d{3}[\s.-]?\d{4}$" %))})
