(ns clash-attack-sim.systems.health
  (:require [maye.core :as ecs]
            [clash-attack-sim.util.helper :as h]
            [clash-attack-sim.components :as components]))

(defn attack [current-hp did-attack frame-count]
  (loop [current-hp current-hp
         did-attack did-attack]
    (if (seq did-attack)
      (let [attacker (first did-attack)
            damage (h/get-damage attacker)]
          (recur (- current-hp damage) (rest did-attack)))
      current-hp)))

(defn get-state [hp]
  (if (pos? hp)
    (components/alive)
    (components/dead)))

(defn update-hp [world entities]
  (let [attacking (filter #(ecs/has-components? % [:attacker :attacking]) entities)
        alive (filter #(ecs/has-components? % [:attackable :alive]) entities)
        frame-count (:frame-count world)
        did-attack (filter #(h/did-attack? % frame-count) attacking)]
    (ecs/assoc-entities world
                        (for [target alive]
                          (let [did-attack (h/get-attackers target did-attack)
                                current-hp (h/get-hp target)
                                new-hp (attack current-hp did-attack frame-count)]
                            (-> target
                                (ecs/remove-component (components/alive))
                                (ecs/assoc-components [(components/attackable new-hp)
                                                       (get-state new-hp)])))))))

(def health-system
  (ecs/system
    :name :health
    :matcher-fn #(or (ecs/has-components? % [:attacker :attacking])
                     (ecs/has-components? % [:attackable :alive]))
    :run-when (ecs/frame-period 5)
    :update-fn update-hp))
