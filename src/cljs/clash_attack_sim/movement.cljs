(ns clash-attack-sim.movement
  (:require-macros [clash-attack-sim.macro :refer [defsystem]])
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]
            [clash-attack-sim.helper :as helper]))

(defn get-next-position [this-x this-y angle velocity]
  (let [cos (.cos js/Math angle)
        sin (.sin js/Math angle)
        next-x (+ this-x (* velocity cos))
        next-y (+ this-y (* velocity sin))]
    [next-x next-y]))

(defn get-animation [animation-component]
  (if (= (:current-animation animation-component) :moving)
    animation-component
    (assoc animation-component :current-animation :moving :current-frame 0)))

(defn update-position [world moving]
  (ecs/assoc-entities world
                      (for [mover moving]
                        (let [animation-component (:animation mover)
                              angle (ecs/get-angle mover)
                              velocity (ecs/get-velocity mover)
                              [x y] (ecs/get-position mover)
                              [final-x final-y] (get-next-position x y angle velocity)]
                          (ecs/assoc-components mover
                                                [(component/position [final-x final-y])
                                                 (get-animation animation-component)])))))

(defsystem movement [world]
  :entities {moving [:movement :facing :moving]}
  :frame-period 1
  :fn update-position)
