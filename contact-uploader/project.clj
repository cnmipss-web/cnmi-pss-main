(defproject contact-uploader "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/data.csv "0.1.4"]
                 [com.novemberain/validateur "2.5.0"]
                 [http-kit "2.2.0"]
                 [com.cemerick/url "0.1.1"]]
  :main ^:skip-aot contact-uploader.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
