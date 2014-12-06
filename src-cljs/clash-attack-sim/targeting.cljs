(ns clash-attack-sim.targeting
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]))

(defn get-distance [a b]
  (let [delta-x (js/Math.abs (- a.x b.x))
        delta-y (js/Math.abs (- a.y b.y))]
    (js/Math.sqrt (+ delta-x delta-y))))

(defn find-target
  [attacker all-attackable]
  (apply min-key (partial get-distance attacker) (seq all-attackable)))

(defn targeting-system [world]
  (let [entities (ecs/get-entities world)
        attackers (filter #(ecs/has-component? % :attacker) entities)
        all-attackable (filter #(ecs/has-component? % :attackable) entities)]
    (if-not (empty? all-attackable)
      (ecs/assoc-entities world
                      (for [attacker attackers]
                        (let [target (find-target attacker all-attackable)]
                          (ecs/assoc-component attacker (component/attacker target)))))
      world)))
