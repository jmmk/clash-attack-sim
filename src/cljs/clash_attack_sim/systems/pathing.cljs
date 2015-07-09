;; Pathing System
;; Looks at each entity, its target, and its surroundings
;; to determine which direction it should move

(ns clash-attack-sim.systems.pathing
  (:require [maye.core :as ecs]
            [clash-attack-sim.util.helper :as h]
            [clash-attack-sim.components :as components]))

(defn get-angle [target-x target-y this-x this-y]
  (let [delta-y (- target-y this-y)
        delta-x (- target-x this-x)]
    (.atan2 js/Math delta-y delta-x)))

(defn update-facing [world entities]
  (ecs/assoc-entities world
                      (for [attacker entities]
                        (let [target (h/get-target attacker)
                              [target-x target-y] (h/get-position target)
                              [attacker-x attacker-y] (h/get-position attacker)
                              angle (get-angle target-x target-y attacker-x attacker-y)]
                          (ecs/assoc-component attacker (components/facing angle))))))

(def pathing-system
  (ecs/system
    :name :pathing
    :matcher-fn #(ecs/has-components? % [:attacker :movement])
    :run-when (ecs/frame-period 5)
    :update-fn update-facing))