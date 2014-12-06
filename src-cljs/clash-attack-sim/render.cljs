(ns clash-attack-sim.render
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.helper :as helper]
            [clash-attack-sim.component :as component]
            [clash-attack-sim.input :as input]))

(def grass (js/PIXI.TilingSprite.
             (helper/load-texture "images/grass-tile.png")
             helper/total-height
             helper/total-width))

(defn rendering-system [world]
  (let [stage (:stage world)
        renderer (:renderer world)]
    (.removeChildren stage)
    (.addChild stage grass)
    (doseq [e (filter #(ecs/has-component? % :renderable) (ecs/get-entities world))]
      (let [render-component (ecs/get-component e :renderable)
            sprite (.-sprite render-component)]
        (when-not (nil? sprite)
          (let [[x y] (ecs/get-position e)
                sprite-pos (.-position sprite)
                on-stage (.-on-stage render-component)]
            (helper/set-property! sprite-pos "x" x)
            (helper/set-property! sprite-pos "y" y)
            (.addChild stage sprite)))))
    (.render renderer stage)
    world))
