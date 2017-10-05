(ns contact-uploader.filter-data
  (:require [contact-uploader.constants :as const]
            [clojure.string :refer [trim]]))

(defn schools
  [school-list next-line]
  (if (-> school-list first vector?)
    (if (re-seq #"\d" (first next-line))
      (conj school-list [next-line])
      (let [curr (conj (last school-list) next-line)]
        (conj (pop school-list) curr)))
    [[next-line]]))

(defn personnel
  [personnel-list next-line]
  (if (= "PHONE" (second next-line))
    (conj personnel-list [next-line])
    (let [curr (conj (last personnel-list) next-line)]
      (conj (pop personnel-list) curr))))

(defn apply-filters
  [key data]
  (cond
    (#{:personnel} key) (reduce personnel [] data) ;
    (#{:offices} key) (filter #(and (> (count (trim (nth % 2))) 1)
                                    (> (count (trim (first %))) 0)) data)
    (#{:schools :headstarts} key) (reduce schools data)))

