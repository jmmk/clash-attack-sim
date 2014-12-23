(ns clash-attack-sim.entities
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]
            [clash-attack-sim.sprite :as sprite]
            [clash-attack-sim.helper :as helper]))

(def barbarian-attributes {:movement-speed 0.25
                           :attack-range 1
                           :damage 5
                           :attack-speed 180})

(def town-hall-attributes {:hp 2000})

(def center-anchor (js/PIXI.Point. 0.5 0.5))

(defn background []
  (let [grass (js/PIXI.TilingSprite.
                (sprite/load-texture "images/grass-tile.png")
                helper/total-height
                helper/total-width)]

    (ecs/entity (component/background grass))))

(defn barbarian [x y]
  (let [neutral (sprite/from-frame "barbarian-neutral-down.png")
        right (sprite/from-frame "barbarian-run-right-down.png")
        left (sprite/from-frame "barbarian-run-left-down.png")
        sprite-list {:neutral neutral :right right :left left}
        animation-seq [:neutral :left :neutral :right]
        movement-speed (:movement-speed barbarian-attributes)
        attack-range (:attack-range barbarian-attributes)
        damage (:damage barbarian-attributes)
        attack-speed (:attack-speed barbarian-attributes)]
    (ecs/entity (component/position [x y])
                (component/movement movement-speed)
                (component/action :standing)
                (component/animation sprite-list animation-seq 0)
                (component/renderable neutral center-anchor [1 1])
                (component/attacker attack-range attack-speed damage nil 0))))

(defn town-hall [x y]
  (let [sprite (sprite/from-image "images/town-hall.png")
        hp (:hp town-hall-attributes)]
    (ecs/entity (component/position [x y])
            (component/renderable sprite center-anchor [4 4])
            (component/attackable hp))))
