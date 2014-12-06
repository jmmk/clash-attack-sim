(ns clash-attack-sim.entities
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]
            [clash-attack-sim.sprite :as sprite]
            [clash-attack-sim.helper :as helper]))

(def ^:const barbarian-speed 0.25)

(defn barbarian [x y]
  (let [sprite (js/PIXI.Sprite. (helper/load-texture "images/barbarian.png"))]
    (sprite/set-pos! sprite "x" x)
    (sprite/set-pos! sprite "y" y)
    (sprite/set-dimension! sprite "height" 1)
    (sprite/set-dimension! sprite "width" 1)

    (ecs/entity (component/position x y)
                (component/movement barbarian-speed)
                (component/renderable sprite)
                (component/attacker nil))))

(defn town-hall [x y]
  (let [sprite (js/PIXI.Sprite. (helper/load-texture "images/town-hall.png"))]
    (sprite/set-pos! sprite "x" x)
    (sprite/set-pos! sprite "y" y)
    (sprite/set-dimension! sprite "height" 4)
    (sprite/set-dimension! sprite "width" 4)

    (ecs/entity (component/position x y)
            (component/renderable sprite)
            (component/attackable))))
