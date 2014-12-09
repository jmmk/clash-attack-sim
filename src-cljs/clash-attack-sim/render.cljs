(ns clash-attack-sim.render
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.helper :as helper]
            [clash-attack-sim.component :as component]
            [clash-attack-sim.sprite :as sprite]
            [clash-attack-sim.input :as input]))

(def grass (js/PIXI.TilingSprite.
             (sprite/load-texture "images/grass-tile.png")
             helper/total-height
             helper/total-width))

(defn rendering-system [world]
  (let [stage (:stage world)
        renderer (:renderer world)]
    (.removeChildren stage)
    (.addChild stage grass)
    (doseq [entity (ecs/get-entities-with-component world :renderable)]
      (let [sprite (ecs/get-sprite entity)]
        (when-not (nil? sprite)
          (let [[x y] (ecs/get-position entity)
                sprite-pos (.-position sprite)]
            (helper/set-property! sprite-pos "x" x)
            (helper/set-property! sprite-pos "y" y)
            (.addChild stage sprite)))))
    (.render renderer stage)
    world))
