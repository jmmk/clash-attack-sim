(ns clash-attack-sim.attack
  (:require-macros [clash-attack-sim.macro :refer [defsystem]])
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]))

(defn attack [attacker attack-speed frame-count]
  (let [last-attacked (ecs/get-last-attacked attacker)
        should-attack? (>= (- frame-count last-attacked) attack-speed)]
    (if should-attack?
      frame-count
      last-attacked)))

(defn do-attacks [world attacking]
  (ecs/assoc-entities world
                      (for [attacker attacking]
                        (let [target (ecs/get-target attacker)
                              frame-count (:frame-count world)
                              current-hp (ecs/get-hp target)
                              attack-range (ecs/get-attack-range attacker)
                              attack-speed (ecs/get-attack-speed attacker)
                              damage (ecs/get-damage attacker)
                              last-attacked (attack attacker attack-speed frame-count)]
                          (ecs/assoc-component attacker (component/attacker attack-range attack-speed damage target last-attacked))))))

(defsystem attack [world]
  :entities {attacking [:attacker :attacking]}
  :frame-period 5
  :fn do-attacks)


