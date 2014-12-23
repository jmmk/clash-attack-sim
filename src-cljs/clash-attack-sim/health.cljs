(ns clash-attack-sim.health
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]))

(defn attack [current-hp did-attack frame-count]
  (loop [current-hp current-hp
         did-attack did-attack]
    (if (seq did-attack)
      (let [attacker (first did-attack)
            damage (ecs/get-damage attacker)]
          (recur (- current-hp damage) (rest did-attack)))
      current-hp)))

(defn health-system [world]
  (let [frame-count (:frame-count world)
        attackers (ecs/get-entities-with-component world :attacker)
        attacking (filter #(ecs/attacking? %) attackers)
        did-attack (filter #(ecs/did-attack? % frame-count) attacking)
        attackable (ecs/get-entities-with-component world :attackable)
        alive (filter #(ecs/alive? %) attackable)]
    (if-not (and (empty? did-attack)
                 (empty? alive))
      (ecs/assoc-entities world
                          (for [target alive]
                            (let [did-attack (ecs/get-attackers target did-attack)
                                  current-hp (ecs/get-hp target)
                                  new-hp (attack current-hp did-attack frame-count)]
                              (ecs/assoc-component target (component/attackable new-hp)))))
      world)))
