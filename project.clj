(defproject clash-attack-sim "0.1.0"
  :description "Clash of Clans Attack Simulator"
  :url "https://www.github.com/jmmk/clash-attack-sim"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/tools.reader "0.10.0-alpha3"]
                 [figwheel-sidecar "0.5.0-2"]
                 [maye "0.2.0-SNAPSHOT"]
                 [bidi "1.20.0"]
                 [cljsjs/pixi "3.0.7-0"]
                 [re-frame "0.4.1"]
                 [re-com "0.5.4"]
                 [ring/ring-core "1.4.0"]
                 [org.clojure/clojurescript "1.7.145"]]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-2"]
            [lein-ring "0.9.7"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["assets/js/clash_attack_sim.js"
                                    "assets/js/out"
                                    "assets/js/out-adv"]

  :ring {:handler clash-attack-sim.server/handler}

  :figwheel {:ring-handler clash-attack-sim.server/handler}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel {:on-jsload "clash-attack-sim.core/init"}
                        :compiler {:main "clash-attack-sim.core"
                                   :output-to "assets/js/clash_attack_sim.js"
                                   :output-dir "assets/js/out"
                                   :optimizations :none
                                   :cache-analysis true
                                   :source-map true}}
                       {:id "production"
                        :source-paths ["src"]
                        :compiler {:output-to "assets/js/clash_attack_sim.js"
                                   :output-dir "assets/js/out-adv"
                                   :optimizations :advanced
                                   :pretty-print false}}]})
