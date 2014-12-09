(ns clash-attack-sim.targeting
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]))

(defn get-distance [a b]
  (let [delta-x (js/Math.abs (- a.x b.x))
        delta-y (js/Math.abs (- a.y b.y))]
    (js/Math.sqrt (+ delta-x delta-y))))

(defn find-target
  [attacker all-attackable]
  (apply min-key (partial get-distance attacker) all-attackable))

(defn targeting-system [world]
  (let [attackers (ecs/get-entities-with-component world :attacker)
        all-attackable (ecs/get-entities-with-component world :attackable)]
    (if-not (empty? all-attackable)
      (ecs/assoc-entities world
                      (for [attacker attackers]
                        (let [target (find-target attacker all-attackable)]
                          (ecs/assoc-component attacker (component/attacker target)))))
      world)))
