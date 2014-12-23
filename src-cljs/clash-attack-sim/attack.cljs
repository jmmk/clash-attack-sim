(ns clash-attack-sim.attack
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]))

(defn attack [attacker attack-speed frame-count]
  (let [last-attacked (ecs/get-last-attacked attacker)
        should-attack? (>= (- frame-count last-attacked) attack-speed)]
    (if should-attack?
      frame-count
      last-attacked)))

(defn attack-system [world]
  (let [attackers (ecs/get-entities-with-component world :attacker)
        attacking (filter #(ecs/attacking? %) attackers)
        attackable (ecs/get-entities-with-component world :attackable)
        alive (filter #(ecs/alive? %) attackable)]
    (if-not (and (empty? attacking)
                 (empty? alive))
      (ecs/assoc-entities world
                          (for [attacker attacking]
                            (let [target (ecs/get-target attacker)
                                  frame-count (:frame-count world)
                                  current-hp (ecs/get-hp target)
                                  attack-range (ecs/get-attack-range attacker)
                                  attack-speed (ecs/get-attack-speed attacker)
                                  damage (ecs/get-damage attacker)
                                  last-attacked (attack attacker attack-speed frame-count)]
                              (ecs/assoc-component attacker (component/attacker attack-range attack-speed damage target last-attacked)))))
      world)))
