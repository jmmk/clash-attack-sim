(ns clash-attack-sim.systems.attack
  (:require [maye.core :as ecs]
            [maye.util :as util]
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

(defn do-attacks [_ entities]
  (for [attacker entities]
    (let [target (h/get-target attacker)
          attack-range (h/get-attack-range attacker)
          attack-speed (h/get-attack-speed attacker)
          damage (h/get-damage attacker)
          last-attacked (attack attacker attack-speed frame)
          animation-component (:animation attacker)]
      (ecs/assoc-components attacker
                            [(components/new-attacker attack-range attack-speed damage target last-attacked)
                             (components/new-animating)
                             (get-animation animation-component)]))))

(def attack-system
  (ecs/new-system
    :name :attack
    :entity-filter #(ecs/contains-components? % [:attacker :attacking])
    :update-filter (util/frame-period 5)
    :update-fn do-attacks))
