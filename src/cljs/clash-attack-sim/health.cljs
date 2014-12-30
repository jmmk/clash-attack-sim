(ns clash-attack-sim.health
  (:require-macros [clash-attack-sim.macro :refer [defsystem]])
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

(defn get-state [hp]
  (if (> hp 0)
    (component/alive)
    (component/dead)))

(defn update-hp [world attacking alive]
  (let [frame-count (:frame-count world)
        did-attack (filter #(ecs/did-attack? % frame-count) attacking)]
    (ecs/assoc-entities world
                        (for [target alive]
                          (let [did-attack (ecs/get-attackers target did-attack)
                                current-hp (ecs/get-hp target)
                                new-hp (attack current-hp did-attack frame-count)]
                            (-> target
                                (ecs/remove-component (component/alive))
                                (ecs/assoc-components [(component/attackable new-hp)
                                                       (get-state new-hp)])))))))

(defsystem health [world]
  :entities {attacking [:attacker :attacking]
             alive [:attackable :alive]}
  :frame-period 5
  :fn update-hp)