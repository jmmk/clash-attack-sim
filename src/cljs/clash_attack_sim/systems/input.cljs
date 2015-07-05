(ns clash-attack-sim.systems.input
  (:require [clash-attack-sim.engine.ecs :as ecs]
            [clash-attack-sim.entities :as entities]))

(def clicks (atom []))

(defn stage-click [event]
  (let [data (.-data event)
        target (.-target event)
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
                                  y (:y click)
                                  random-int (+ (.floor js/Math (* (.random js/Math) 639)) 1)]
                              (if (< random-int x)
                                (entities/barbarian x y)
                                (entities/archer x y)))))
      world)))
