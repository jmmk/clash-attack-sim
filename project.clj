(defproject clash-attack-sim "0.1.0"
  :description "Clash of Clans Attack Simulator"
  :url "https://www.github.com/jmmk/clash-attack-sim"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [bidi "1.18.7"]
                 [cljsjs/react "0.13.1-0"]
                 [criterium "0.4.3"]
                 [hiccup "1.0.5"]
                 [reagent "0.5.0"]
                 [re-frame "0.2.0"]
                 [com.lucasbradstreet/cljs-uuid-utils "1.0.1"]
                 [org.clojure/clojurescript "0.0-3126"]]
  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-ring "0.9.3"]]
  :ring {:handler clash-attack-sim.core/run}
  :source-paths ["src/clj"]
  :cljsbuild {
              :builds {
                       :devel {
                               :source-paths ["src/cljs"]
                               :compiler {:output-to "resources/public/js/clash-attack-sim.js"
                                          :optimizations :whitespace
                                          :externs ["resources/public/bower_components/pixi/bin/pixi.js"]}}
                       :production {
                                    :source-paths ["src/cljs"]
                                    :compiler {:output-to "target/production/js/clash-attack-sim.js"
                                               :optimizations :advanced
                                               :externs ["resources/public/bower_components/pixi/bin/pixi.js"]}}}})
