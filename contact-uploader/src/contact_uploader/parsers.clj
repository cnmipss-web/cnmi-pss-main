(ns contact-uploader.parsers
  (:require [clojure.spec.alpha :as s]
            [clojure.string :refer [join trim]]
            [contact-uploader.constants :as const]
            [contact-uploader.util :refer :all]
            [contact-uploader.validators :as v]))

(defn telephone
  [tel]
  (if (and (> (count tel) 0) (re-seq #"\d" tel))
    (let [correct-pattern #"^\(\d{3}\)\s*\d{3}\-\d{4}$"
          fix-pattern #"(\(\d{3}\))?\s*(\d{3})\-([\d\/\-\s]{4,})"]
      (if (re-seq correct-pattern tel)
        (identity tel) ;; Already correctly formated
        (let [matches (first (re-seq fix-pattern tel))]
          (str const/area-code (nth matches 2) "-" (nth matches 3)))))
    (identity ""))) ;; Empty string

(defn personnel
  [bldg-list]
  (let [bldg (first bldg-list)
        address (first bldg)
        data (rest bldg-list)]
    (filter some?
            (for [[name phone cell alt-tel fax email] data]
              (let [phone-nums [(telephone phone) (telephone cell) (telephone alt-tel)]]
                (if (v/valid-email? email)
                  {:address address
                   :name name
                   :fax (telephone fax)
                   :email email
                   :tel (->> phone-nums
                             (filter #(and (= (type %) java.lang.String)
                                           (> (count (trim %)) 0)))
                             (join ", "))}
                  nil))))))

(defn offices
  [data]
  (let [location (if (= "Capitol Hill" (trim (nth data 2)))
                   (str "Capitol Hill Bldg #" (trim (first data)))
                   (nth data 2))]
    {:name (second data)
     :address location
     :tel (nth data 3) ; Some weird data in source, so not trying to parse or correct.
     :fax (telephone (nth data 4))}))

(defn schools
  [school]
  (println school)
  {:name (get-in school [0 1])
   :short (get-in school [1 0])
   :address (join "\r\n" [(get-in school [1 1]) (get-in school [2 1]) (get-in school [3 1])])
   :fax (telephone (get-in school [0 4]))
   :tel (telephone (get-in school [0 3]))
   :staff (map (fn [row] {:name (get row 2)
                          :tel (->> [(get row 3) (get row 5)]
                                    (filter #(> (count %) 0))
                                    (map telephone)
                                    (join ", "))
                          :email (get row 6)}) school)})

(defn headstarts
  [head-start]
  {:name (get-in head-start [0 1])
   :coord {:name (get-in head-start [1 4])
           :tel (telephone (get-in head-start [1 5]))
           :email (get-in head-start [1 6])}
   :staff (map (fn [row] (if (> (count (get row 2)) 0)
                           {:name (get row 2)
                            :tel (->> [(get row 3) (get row 5)]
                                      (filter #(> (count %) 0))
                                      (map telephone)
                                      (join ", "))
                            :email (get row 6)})) head-start)})

(def parser-list
  (keyed [personnel schools offices headstarts]))

(defn parser
  [key data]
  (let [parsed (map (get parser-list key) data)]
    (if-not (-> parsed first map?)
      (flatten parsed)
      parsed)))
