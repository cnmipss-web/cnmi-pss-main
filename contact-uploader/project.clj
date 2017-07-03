(defproject contact-uploader "0.1.0-SNAPSHOT"
  :description "Utility to upload contact info to WP site"
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/data.csv "0.1.4"]
                 [com.novemberain/validateur "2.5.0"]
                 [http-kit "2.2.0"]
                 [com.cemerick/url "0.1.1"]
                 [environ "1.1.0"]]
  :plugins [[lein-environ "1.1.0"]]
  :main ^:skip-aot contact-uploader.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
