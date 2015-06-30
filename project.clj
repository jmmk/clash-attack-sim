(defproject clash-attack-sim "0.1.0"
  :description "Clash of Clans Attack Simulator"
  :url "https://www.github.com/jmmk/clash-attack-sim"
  :dependencies [[org.clojure/clojure "1.7.0-RC2"]
                 [bidi "1.19.1"]
                 [hiccup "1.0.5"]
                 [cljsjs/pixi "3.0.7-0"]
                 [re-frame "0.4.1"]
                 [org.clojure/clojurescript "0.0-3308"]]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-ring "0.9.6"]
            [lein-figwheel "0.3.5"]]

  :source-paths ["src/clj"]

  :clean-targets ^{:protect false} ["resources/public/js/clash-attack-sim.js"
                                    "resources/public/js/out"
                                    "out-adv"]

  :ring {:handler clash-attack-sim.core/run}

  :figwheel {:ring-handler clash-attack-sim.core/run}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel {:on-jsload "clash-attack-sim.main/init"}
                        :compiler {:main "clash-attack-sim.main"
                                   :output-to "resources/public/js/clash-attack-sim.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :cache-analysis true
                                   :source-map true}}
                       {:id "production"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/clash-attack-sim.js"
                                   :output-dir "out-adv"
                                   :optimizations :advanced
                                   :pretty-print false}}]})
