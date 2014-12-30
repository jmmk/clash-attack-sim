(ns clash-attack-sim.animation
  (:require-macros [clash-attack-sim.macro :refer [defsystem]])
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]))

(defn get-next-index [animation-seq current-index]
  (let [length (count animation-seq)]
    (if (= current-index (- length 1))
      0
      (inc current-index))))

(defn animate [world all-animatable]
  (ecs/assoc-entities world
                      (for [animatable all-animatable]
                        (let [anchor (ecs/get-anchor animatable)
                              size (ecs/get-size animatable)
                              sprite-list (ecs/get-sprite-list animatable)
                              animation-seq (ecs/get-animation-seq animatable)
                              current-index (ecs/get-current-index animatable)
                              next-index (get-next-index animation-seq current-index)
                              next-sprite-key (get animation-seq next-index)
                              next-sprite (get sprite-list next-sprite-key)]
                          (ecs/assoc-components animatable [(component/animation sprite-list animation-seq next-index)
                                                            (component/renderable next-sprite anchor size)])))))

(defsystem animation [world]
  :entities {all-animatable [:animation]}
  :frame-period 15
  :fn animate)
