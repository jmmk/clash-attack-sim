(ns clash-attack-sim.targeting
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]
            [clash-attack-sim.helper :as helper]))

(def ^:const barbarian-speed 0.03)

(defn get-distance [a b]
  (let [delta-x (js/Math.abs (- a.x b.x))
        delta-y (js/Math.abs (- a.y b.y))]
    (js/Math.sqrt (+ delta-x delta-y))))

(defn find-target
  [attacker all-attackable]
  (apply min-key (partial get-distance attacker) (seq all-attackable)))

(defn move-towards [target attacker]
  (if (> target attacker)
    (+ attacker (* barbarian-speed helper/tile-size))
    (if (= target attacker)
      attacker
      (- attacker (* barbarian-speed helper/tile-size)))))

(defn targeting-system [world]
  (let [entities (ecs/get-entities world)
        attackers (filter #(ecs/has-component? % :attacker) entities)
        all-attackable (filter #(ecs/has-component? % :attackable) entities)]
    (when-not (empty? all-attackable)
      (ecs/assoc-entities world
                      (for [attacker attackers]
                        (let [target (find-target attacker all-attackable)
                              [target-x target-y] (ecs/get-position target)
                              [attacker-x attacker-y] (ecs/get-position attacker)
                              final-x (move-towards target-x attacker-x)
                              final-y (move-towards target-y attacker-y)]
                          (ecs/assoc-component attacker (component/position final-x final-y))))))))
