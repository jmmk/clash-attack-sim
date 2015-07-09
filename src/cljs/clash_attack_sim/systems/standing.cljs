(ns clash-attack-sim.systems.standing
  (:require [maye.core :as ecs]))

(defn stand-still [world entities]
  (ecs/assoc-entities world
                      (for [entity entities]
                        (let [renderable-component (:renderable entity)
                              default-sprite (:default-sprite renderable-component)]
                          (ecs/assoc-component entity (assoc renderable-component :current-sprite default-sprite))))))

(def standing-system
  (ecs/system
    :name :standing
    :matcher-fn #(contains? % :standing)
    :run-when (ecs/frame-period 5)
    :update-fn stand-still))
