(ns clash-attack-sim.systems.attack
  (:require [maye.core :as ecs]
            [clash-attack-sim.util.helper :as h]
            [clash-attack-sim.components :as components]))

(defn attack [attacker attack-speed frame-count]
  (let [last-attacked (h/get-last-attacked attacker)
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
                        (let [target (h/get-target attacker)
                              frame-count (:frame-count world)
                              current-hp (h/get-hp target)
                              attack-range (h/get-attack-range attacker)
                              attack-speed (h/get-attack-speed attacker)
                              damage (h/get-damage attacker)
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
