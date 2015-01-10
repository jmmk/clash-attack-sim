(ns clash-attack-sim.entities
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]
            [clash-attack-sim.sprite :as sprite]
            [clash-attack-sim.helper :as helper]))

(def ^:const red 0xFF0000)

(def archer-attributes {:movement-speed 0.3
                        :attack-range 30
                        :damage 5
                        :attack-speed 180
                        :tile-height 1
                        :tile-width 1})

(def barbarian-attributes {:movement-speed 0.25
                           :attack-range 1
                           :damage 5
                           :attack-speed 180
                           :tile-height 1
                           :tile-width 1})

(def town-hall-attributes {:hp 2000
                           :hp-color red
                           :tile-height 4
                           :tile-width 4})

(def center-anchor (js/PIXI.Point. 0.5 0.5))

(defn background []
  (let [grass (js/PIXI.TilingSprite.
                (sprite/texture-from-image "images/grass-tile.png")
                helper/total-height
                helper/total-width)]

    (ecs/entity (component/background grass))))

(defn barbarian [x y]
  (let [neutral (sprite/from-frame "barbarian/run-down/neutral")
        right (sprite/from-frame "barbarian/run-down/right")
        left (sprite/from-frame "barbarian/run-down/left")
        sprite-list {:neutral neutral :right right :left left}
        animation-seq [:neutral :left :neutral :right]
        movement-speed (:movement-speed barbarian-attributes)
        attack-range (:attack-range barbarian-attributes)
        damage (:damage barbarian-attributes)
        attack-speed (:attack-speed barbarian-attributes)
        tile-height (:tile-height barbarian-attributes)
        tile-width (:tile-width barbarian-attributes)
        pixel-height (helper/get-tile-size tile-height)
        pixel-width (helper/get-tile-size tile-width)]
    (ecs/entity (component/position [x y])
                (component/standing)
                (component/movement movement-speed)
                (component/animation sprite-list animation-seq 0)
                (component/renderable neutral center-anchor [tile-height tile-width])
                (component/attacker attack-range attack-speed damage nil 0))))

(defn archer [x y]
  (let [neutral (sprite/from-frame "archer/run-down/neutral")
        right (sprite/from-frame "archer/run-down/right")
        left (sprite/from-frame "archer/run-down/left")
        sprite-list {:neutral neutral :right right :left left}
        animation-seq [:neutral :left :neutral :right]
        movement-speed (:movement-speed archer-attributes)
        attack-range (:attack-range archer-attributes)
        damage (:damage archer-attributes)
        attack-speed (:attack-speed archer-attributes)
        tile-height (:tile-height archer-attributes)
        tile-width (:tile-width archer-attributes)
        pixel-height (helper/get-tile-size tile-height)
        pixel-width (helper/get-tile-size tile-width)]
    (ecs/entity (component/position [x y])
                (component/standing)
                (component/movement movement-speed)
                (component/animation sprite-list animation-seq 0)
                (component/renderable neutral center-anchor [tile-height tile-width])
                (component/attacker attack-range attack-speed damage nil 0))))

(defn town-hall [x y]
  (let [sprite (sprite/from-frame "town-hall/town-hall")
        hp (:hp town-hall-attributes)
        hp-color (:hp-color town-hall-attributes)
        tile-height (:tile-height town-hall-attributes)
        tile-width (:tile-width town-hall-attributes)
        pixel-height (helper/get-tile-size tile-height)
        pixel-width (helper/get-tile-size tile-width)
        health-bar-height (/ tile-height 4)]
    (ecs/entity (component/position [x y])
                (component/renderable sprite center-anchor [tile-height tile-width])
                (component/alive)
                (component/health-bar (js/PIXI.Graphics.) hp-color hp)
                (component/attackable hp))))
