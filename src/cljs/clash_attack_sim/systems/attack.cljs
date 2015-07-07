(ns clash-attack-sim.systems.attack
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

(defn do-attacks [world entities]
  (ecs/assoc-entities world
                      (for [attacker entities]
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

(def attack-system
  (ecs/system
    :name :attack
    :matcher-fn #(ecs/has-components? % [:attacker :attacking])
    :run-when (ecs/frame-period 5)
    :update-fn do-attacks))
