(ns contact-uploader.constants
  (:require [environ.core :refer [env]]))

(def area-code "(670) ")
(def wp-host (env :wp-host))

(def contact-info-main "/wp-json/wp/v2/contact_info")
(def contact-info-acf "/wp-json/acf/v3/contact_info/")

(def school-main "/wp-json/wp/v2/school")
(def school-acf "/wp-json/acf/v3/school/")

(def token-route "/wp-json/jwt-auth/v1/token")

(def target-urls {:personnel {:main contact-info-main
                              :acf contact-info-acf}
                  :offices {:main contact-info-main
                            :acf contact-info-acf}
                  :schools {:main school-main
                            :acf school-acf}
                  :headstarts {:main school-main
                               :acf school-acf}})
