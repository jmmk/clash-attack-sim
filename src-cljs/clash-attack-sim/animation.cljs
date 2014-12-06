(ns clash-attack-sim.animation
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]))

(defn get-next-index [animation-seq current-index]
  (let [length (count animation-seq)]
    (if (= current-index (- length 1))
      0
      (inc current-index))))

(defn animation-system [world]
  (let [frame-count (:frame-count world)
        entities (ecs/get-entities world)
        all-animatable (filter #(ecs/has-component? % :animation) entities)]
    (if-not (= (mod frame-count 15) 0)
      world
      (if-not (empty? all-animatable)
      (ecs/assoc-entities world
                          (for [animatable all-animatable]
                            (let [sprite-list (ecs/get-sprite-list animatable)
                                  animation-seq (ecs/get-animation-seq animatable)
                                  current-index (ecs/get-current-index animatable)
                                  next-index (get-next-index animation-seq current-index)
                                  next-sprite-key (get animation-seq next-index)
                                  next-sprite (get sprite-list next-sprite-key)]
                              (ecs/assoc-components animatable [(component/animation sprite-list animation-seq next-index)
                                                                (component/renderable next-sprite)]))))
      world))))
