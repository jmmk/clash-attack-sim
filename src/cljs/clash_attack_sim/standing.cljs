(ns clash-attack-sim.standing
  (:require-macros [clash-attack-sim.macro :refer [defsystem]])
  (:require [clash-attack-sim.ecs :as ecs]))

(defn stand-still [world standing]
  (ecs/assoc-entities world
                      (for [entity standing]
                        (let [renderable-component (:renderable entity)
                              default-sprite (:default-sprite renderable-component)]
                          (ecs/assoc-component entity (assoc renderable-component :current-sprite default-sprite))))))

(defsystem standing [world]
  :entities {standing [:standing]}
  :frame-period 5
  :fn stand-still)
