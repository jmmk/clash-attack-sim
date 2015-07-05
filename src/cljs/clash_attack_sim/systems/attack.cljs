(ns clash-attack-sim.systems.attack
  (:require-macros [clash-attack-sim.macro :refer [defsystem]])
  (:require [clash-attack-sim.engine.ecs :as ecs]
            [clash-attack-sim.components :as components]))

(defn attack [attacker attack-speed frame-count]
  (let [last-attacked (ecs/get-last-attacked attacker)
        should-attack? (>= (- frame-count last-attacked) attack-speed)]
    (if should-attack?
      frame-count
      last-attacked)))

(defn get-animation [animation-component]
  (if (= (:current-animation animation-component) :attacking)
    animation-component
    (assoc animation-component :current-animation :attacking :current-frame 0)))

(defn do-attacks [world attacking]
  (ecs/assoc-entities world
                      (for [attacker attacking]
                        (let [target (ecs/get-target attacker)
                              frame-count (:frame-count world)
                              current-hp (ecs/get-hp target)
                              attack-range (ecs/get-attack-range attacker)
                              attack-speed (ecs/get-attack-speed attacker)
                              damage (ecs/get-damage attacker)
                              last-attacked (attack attacker attack-speed frame-count)
                              animation-component (:animation attacker)]
                          (ecs/assoc-components attacker
                                                [(components/attacker attack-range attack-speed damage target last-attacked)
                                                 (components/animating)
                                                 (get-animation animation-component)])))))

(defsystem attack [world]
  :entities {attacking [:attacker :attacking]}
  :frame-period 5
  :fn do-attacks)


