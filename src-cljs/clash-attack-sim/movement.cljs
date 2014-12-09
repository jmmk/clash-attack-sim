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
        movers (filter #(ecs/has-components? % :movement :facing) entities)]
    (if-not (empty? movers)
      (ecs/assoc-entities world
                          (for [mover movers]
                            (let [angle (ecs/get-angle mover)
                                  velocity (ecs/get-velocity mover)
                                  [x y] (ecs/get-position mover)
                                  [final-x final-y] (get-next-position x y angle velocity)]
                              (ecs/assoc-component mover (component/position final-x final-y)))))
      world)))
