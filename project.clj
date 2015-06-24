(defproject clash-attack-sim "0.1.0"
  :description "Clash of Clans Attack Simulator"
  :url "https://www.github.com/jmmk/clash-attack-sim"
  :dependencies [[org.clojure/clojure "1.7.0-RC2"]
                 [bidi "1.19.1"]
                 [cljsjs/react "0.13.3-0"]
                 [hiccup "1.0.5"]
                 [reagent "0.5.0"]
                 [cljsjs/pixi "3.0.6-0"]
                 [re-frame "0.4.1"]
                 [org.clojure/clojurescript "0.0-3308"]]
  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-ring "0.9.6"]]
  :ring {:handler clash-attack-sim.core/run}
  :source-paths ["src/clj"]
  :cljsbuild {
              :builds {
                       :devel {
                               :source-paths ["src/cljs"]
                               :compiler {:output-to "resources/public/js/clash-attack-sim.js"
                                          :optimizations :whitespace}}
                       :production {
                                    :source-paths ["src/cljs"]
                                    :compiler {:output-to "target/production/js/clash-attack-sim.js"
                                               :optimizations :advanced}}}})
