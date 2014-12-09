(ns clash-attack-sim.entities
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]
            [clash-attack-sim.sprite :as sprite]
            [clash-attack-sim.helper :as helper]))

(def ^:const barbarian-speed 0.25)

(defn barbarian [x y]
  (let [neutral (js/PIXI.Sprite. (helper/load-texture "images/barbarian-neutral-down.png"))
        right (js/PIXI.Sprite. (helper/load-texture "images/barbarian-run-right-down.png"))
        left (js/PIXI.Sprite. (helper/load-texture "images/barbarian-run-left-down.png"))
        sprite-list {:neutral neutral :right right :left left}
        animation-seq [:neutral :left :neutral :right]]
    (sprite/set-pos! neutral x y)
    (sprite/resize! neutral 1 1)
    (sprite/resize! right 1 1)
    (sprite/resize! left 1 1)

    (ecs/entity (component/position x y)
                (component/movement barbarian-speed)
                (component/animation sprite-list animation-seq 0)
                (component/renderable neutral)
                (component/attacker nil))))

(defn town-hall [x y]
  (let [sprite (js/PIXI.Sprite. (helper/load-texture "images/town-hall.png"))]
    (sprite/set-pos! sprite x y)
    (sprite/resize! sprite 4 4)

    (ecs/entity (component/position x y)
            (component/renderable sprite)
            (component/attackable))))
