(ns clash-attack-sim.systems.health
  (:require [maye.core :as ecs]
            [clash-attack-sim.util.helper :as h]
            [clash-attack-sim.components :as components]))

(defn attack [current-hp did-attack]
  (loop [current-hp current-hp
         did-attack did-attack]
    (if (seq did-attack)
      (let [attacker (first did-attack)
            damage (h/get-damage attacker)]
        (recur (- current-hp damage) (rest did-attack)))
      current-hp)))

(defn get-state [hp]
  (if (pos? hp)
    components/new-alive
    components/new-dead))

(defn update-hp [{:keys [frame]} entities]
  (let [attacking (filter #(ecs/contains-components? % [:attacker :attacking]) entities)
        alive (filter #(ecs/contains-components? % [:attackable :alive]) entities)
        did-attack (filter #(h/did-attack? % frame) attacking)]
    (for [target alive]
      (let [did-attack (h/get-attackers target did-attack)
            current-hp (h/get-hp target)
            new-hp (attack current-hp did-attack)]
        (-> target
            (ecs/dissoc-component components/new-alive)
            (ecs/assoc-components [(components/new-attackable new-hp)
                                   (get-state new-hp)]))))))

(def health-system
  (ecs/new-system
    :name :health
    :entity-filters [#(ecs/contains-components? % [:attacker :attacking])
                     #(ecs/contains-components? % [:attackable :alive])]
    :update-filters [(ecs/frame-period 5)]
    :update-fn update-hp))
