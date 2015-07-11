(ns clash-attack-sim.systems.input
  (:require [maye.core :as ecs]
            [clash-attack-sim.entities :as e]))

(def clicks (atom []))

(defn stage-click [event]
  (let [data (.-data event)
        target (.-target event)
        point (.getLocalPosition data target)
        x (.-x point)
        y (.-y point)]
    (swap! clicks conj {:x x :y y})))

(defn handle-input [world entities]
  (let [last-clicks @clicks]
    (reset! clicks [])
    (if (seq last-clicks)
      (ecs/assoc-entities world
                          (for [click last-clicks]
                            (let [x (:x click)
                                  y (:y click)
                                  random-int (inc (.floor js/Math (* (.random js/Math) 639)))]
                              (if (< random-int x)
                                (e/barbarian x y)
                                (e/archer x y)))))
      world)))

(def input-system
  (ecs/system
    :name :input
    :update-fn handle-input))
