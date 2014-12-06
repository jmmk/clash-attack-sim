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

(defn get-next-position [this-x this-y angle velocity]
  (let [cos (.cos js/Math angle)
        sin (.sin js/Math angle)
        next-x (+ this-x (* velocity cos))
        next-y (+ this-y (* velocity sin))]
    [next-x next-y]))

(defn movement-system [world]
  (let [entities (ecs/get-entities world)
        movers (filter #(ecs/has-component? % :movement) entities)
        facers (filter #(ecs/has-component? % :facing) movers)]
    (if-not (empty? facers)
      (ecs/assoc-entities world
                          (for [facer facers]
                            (let [angle (ecs/get-angle facer)
                                  velocity (ecs/get-velocity facer)
                                  [x y] (ecs/get-position facer)
                                  [final-x final-y] (get-next-position x y angle velocity)]
                              (ecs/assoc-component facer (component/position final-x final-y)))))
      world)))
