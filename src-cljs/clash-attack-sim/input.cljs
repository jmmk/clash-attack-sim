(ns clash-attack-sim.input
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.entities :as entities]))

(def clicks (atom []))

(defn stage-click [data]
  (let [target (.-target data)
        point (.getLocalPosition data target)
        x (.-x point)
        y (.-y point)]
    (swap! clicks conj {:x x :y y})))

(defn input-system [world]
  (let [last-clicks @clicks]
    (reset! clicks [])
    (if (seq last-clicks)
      (ecs/assoc-entities world
                          (for [click last-clicks]
                            (let [x (:x click)
                                  y (:y click)]
                              (entities/barbarian x y))))
      world)))
