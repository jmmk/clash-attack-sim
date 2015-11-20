(ns clash-attack-sim.systems.standing
  (:require [maye.core :as ecs]
            [maye.util :as util]))

(defn stand-still [_ entities]
  (for [entity entities]
    (let [{:keys [renderable]} entity
          {:keys [default-sprite]} renderable]
      (ecs/assoc-component entity (assoc renderable :current-sprite default-sprite)))))

(def standing-system
  (ecs/new-system
    :name :standing
    :entity-filter #(contains? % :standing)
    :update-filter (util/frame-period 5)
    :update-fn stand-still))
