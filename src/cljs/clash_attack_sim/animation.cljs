(ns clash-attack-sim.animation
  (:require-macros [clash-attack-sim.macro :refer [defsystem]])
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]))

(defn get-next-index [animation-seq current-index]
  (let [length (count animation-seq)]
    (if (= current-index (- length 1))
      0
      (inc current-index))))

(defn animate [world animating]
  (ecs/assoc-entities world
                      (for [animatable animating]
                        (let [renderable-component (:renderable animatable)
                              animation-component (:animation animatable)
                              current-animation (ecs/get-current-animation animatable)
                              sprite-list (:frames current-animation)
                              animation-seq (:sequence current-animation)
                              current-index (ecs/get-current-index animatable)
                              next-index (get-next-index animation-seq current-index)
                              next-sprite-key (get animation-seq next-index)
                              next-sprite (get sprite-list next-sprite-key)]
                          (ecs/assoc-components animatable [(assoc animation-component :current-frame next-index)
                                                            (assoc renderable-component :current-sprite next-sprite)])))))

(defsystem animation [world]
  :entities {animating [:renderable :animation :animating]}
  :frame-period 15
  :fn animate)
