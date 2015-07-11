(ns clash-attack-sim.systems.animation
  (:require [clash-attack-sim.util.helper :as h]
            [maye.core :as ecs]))

(defn get-next-index [animation-seq current-index]
  (let [length (count animation-seq)]
    (if (= current-index (dec length))
      0
      (inc current-index))))

(defn animate [world entities]
  (ecs/assoc-entities world
                      (for [animatable entities]
                        (let [renderable-component (:renderable animatable)
                              animation-component (:animation animatable)
                              current-animation (h/get-current-animation animatable)
                              sprite-list (:frames current-animation)
                              animation-seq (:sequence current-animation)
                              current-index (h/get-current-index animatable)
                              next-index (get-next-index animation-seq current-index)
                              next-sprite-key (get animation-seq next-index)
                              next-sprite (get sprite-list next-sprite-key)]
                          (ecs/assoc-components animatable [(assoc animation-component :current-frame next-index)
                                                            (assoc renderable-component :current-sprite next-sprite)])))))

(def animation-system
  (ecs/system
    :name :animation
    :matcher-fn #(ecs/has-components? % [:renderable :animation :animating])
    :run-when (ecs/frame-period 15)
    :update-fn animate))
