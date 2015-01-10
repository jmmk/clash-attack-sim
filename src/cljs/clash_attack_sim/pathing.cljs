;; Pathing System
;; Looks at each entity, its target, and its surroundings
;; to determine which direction it should move

(ns clash-attack-sim.pathing
  (:require-macros [clash-attack-sim.macro :refer [defsystem]])
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]))

(defn get-angle [target-x target-y this-x this-y]
  (let [delta-y (- target-y this-y)
        delta-x (- target-x this-x)]
    (.atan2 js/Math delta-y delta-x)))

(defn update-facing [world attackers]
  (ecs/assoc-entities world
                      (for [attacker attackers]
                        (let [target (ecs/get-target attacker)
                              [target-x target-y] (ecs/get-position target)
                              [attacker-x attacker-y] (ecs/get-position attacker)
                              angle (get-angle target-x target-y attacker-x attacker-y)]
                          (ecs/assoc-component attacker (component/facing angle))))))

(defsystem pathing [world]
  :entities {attackers [:attacker :movement]}
  :frame-period 5
  :fn update-facing)
