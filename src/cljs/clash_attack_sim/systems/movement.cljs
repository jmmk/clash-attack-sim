(ns clash-attack-sim.systems.movement
  (:require [clash-attack-sim.engine.ecs :as ecs]
            [clash-attack-sim.components :as components]
            [clash-attack-sim.util.helper :as helper]))

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

(defn update-position [world entities]
  (ecs/assoc-entities world
                      (for [mover entities]
                        (let [animation-component (:animation mover)
                              angle (ecs/get-angle mover)
                              velocity (ecs/get-velocity mover)
                              [x y] (ecs/get-position mover)
                              [final-x final-y] (get-next-position x y angle velocity)]
                          (ecs/assoc-components mover
                                                [(components/position [final-x final-y])
                                                 (components/animating)
                                                 (get-animation animation-component)])))))

(def movement-system
  (ecs/system
    :name :movement
    :matcher-fn #(ecs/has-components? % [:movement :facing :moving])
    :update-fn update-position))
