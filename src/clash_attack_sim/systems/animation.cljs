(ns clash-attack-sim.systems.animation
  (:require [clash-attack-sim.util.helper :as h]
            [maye.core :as ecs]))

(defn get-next-index [animation-seq current-index]
  (let [length (count animation-seq)]
    (if (= current-index (dec length))
      0
      (inc current-index))))

(defn animate [_ entities]
  (for [animatable entities]
    (let [{:keys [renderable animation]} animatable
          current-animation (h/get-current-animation animatable)
          {:keys [frames sequence]} current-animation
          current-index (h/get-current-index animatable)
          next-index (get-next-index sequence current-index)
          next-sprite-key (get sequence next-index)
          next-sprite (get frames next-sprite-key)]
      (ecs/assoc-components animatable [(assoc animation :current-frame next-index)
                                        (assoc renderable :current-sprite next-sprite)]))))

(def animation-system
  (ecs/new-system
    :name :animation
    :entity-filters [#(ecs/contains-components? % [:renderable :animation :animating])]
    :update-filters [(ecs/frame-period 15)]
    :update-fn animate))
