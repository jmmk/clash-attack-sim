(ns clash-attack-sim.systems.standing
  (:require [maye.core :as ecs]))

(enable-console-print!)

(defn stand-still [_ entities]
  (for [entity entities]
    (let [{:keys [renderable]} entity
          {:keys [default-sprite]} renderable]
      (ecs/assoc-component entity (assoc renderable :current-sprite default-sprite)))))

(def standing-system
  (ecs/new-system
    :name :standing
    :entity-filters [#(contains? % :standing)]
    :update-filters [(ecs/frame-period 5)]
    :update-fn stand-still))
