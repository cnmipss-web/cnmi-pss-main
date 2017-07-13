(defproject contact-uploader "0.1.0-SNAPSHOT"
  :description "Utility to upload contact info to WP site"
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.apache.commons/commons-text "1.1"]
                 [org.clojure/clojure "1.9.0-alpha17"]
                 [org.clojure/data.csv "0.1.4"]
                 [org.clojure/test.check "0.9.0"]
                 [com.novemberain/validateur "2.5.0"]
                 [http-kit "2.2.0"]
                 [com.cemerick/url "0.1.1"]
                 [environ "1.1.0"]]
  :plugins [[lein-environ "1.1.0"]
            [lein-cloverage "1.0.9"]]
  :main ^:skip-aot contact-uploader.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[org.clojure/test.check "0.9.0"]]}})
