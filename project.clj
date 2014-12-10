(defproject clash-attack-sim "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.2.1"]
                 [hiccup "1.0.5"]
                 [org.clojars.leanpixel/cljs-uuid-utils "1.0.0-SNAPSHOT"]
                 [org.clojure/clojurescript "0.0-2371"]]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.13"]]
  :ring {:handler clash-attack-sim.core/routes}
  :cljsbuild {
              :builds {
                       :devel {
                               :source-paths ["src-cljs"]
                               :compiler {:output-to "resources/public/js/clash-attack-sim.js"
                                          :optimizations :whitespace}}
                       :production {
                                    :source-paths ["src-cljs"]
                                    :compiler {:output-to "target/production/js/clash-attack-sim.js"
                                               :optimizations :advanced
                                               :externs ["bower_components/pixi/bin/pixi.js"]}}}})
