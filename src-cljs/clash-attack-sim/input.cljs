(ns clash-attack-sim.input
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.entities :as entities]))

(def clicks (atom {}))

(defn stage-click [data]
  (let [target (.-target data)
        point (.getLocalPosition data target)
        x (.-x point)
        y (.-y point)]
    (reset! clicks {:x x :y y})))

(defn input-system [world]
  (if-not (empty? @clicks)
    (let [x (:x @clicks)
          y (:y @clicks)]
      (reset! clicks {})
      (ecs/assoc-entity world (entities/barbarian x y)))
    world))
