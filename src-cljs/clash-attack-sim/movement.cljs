(ns clash-attack-sim.movement
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]
            [clash-attack-sim.helper :as helper]))

(defn move-towards [mover target velocity]
  (if (> target mover)
    (+ mover (* velocity helper/tile-size))
    (if (= target mover)
      mover
      (- mover (* velocity helper/tile-size)))))

(defn movement-system [world]
  (let [entities (ecs/get-entities world)
        movers (filter #(ecs/has-component? % :movement) entities)
        attackers (filter #(ecs/has-component? % :attacker) movers)]
    (if-not (empty? attackers)
      (ecs/assoc-entities world
                          (for [attacker attackers]
                            (let [target (ecs/get-target attacker)
                                  velocity (ecs/get-velocity attacker)
                                  [target-x target-y] (ecs/get-position target)
                                  [attacker-x attacker-y] (ecs/get-position attacker)
                                  final-x (move-towards attacker-x target-x velocity)
                                  final-y (move-towards attacker-y target-y velocity)]
                              (ecs/assoc-component attacker (component/position final-x final-y)))))
      world)))
