(ns clash-attack-sim.attack
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]))

(defn attack [current-hp attacking frame-count]
  (if (> current-hp 0)
    (loop [current-hp current-hp
           attacking attacking]
      (if (seq attacking)
        (let [attacker (first attacking)
              damage (ecs/get-damage attacker)
              attack-speed (ecs/get-attack-speed attacker)
              should-attack? (= (mod frame-count attack-speed) 0)]
          (if should-attack?
            (recur (- current-hp damage) (rest attacking))
            (recur current-hp (rest attacking))))
        current-hp))
    current-hp))

(defn attack-system [world]
  (let [attackers (ecs/get-entities-with-component world :attacker)
        attacking (filter #(ecs/attacking? %) attackers)
        attackable (ecs/get-entities-with-component world :attackable)
        alive (filter #(ecs/alive? %) attackable)]
    (if-not (and (empty? attacking)
                 (empty? alive))
      (ecs/assoc-entities world
                          (for [target alive]
                            (let [attacking (ecs/get-attacking target attacking)
                                  frame-count (:frame-count world)
                                  current-hp (ecs/get-hp target)
                                  new-hp (attack current-hp attacking frame-count)]
                              (ecs/assoc-component target (component/attackable new-hp)))))
      world)))
