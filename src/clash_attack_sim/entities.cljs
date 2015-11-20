(ns clash-attack-sim.entities
  (:require [cljsjs.pixi]
            [maye.core :as ecs]
            [clash-attack-sim.components :as components]
            [clash-attack-sim.util.sprite :as sprite]
            [clash-attack-sim.util.helper :as helper]))

(def ^:const red 0xFF0000)

(def archer-attributes {:movement-speed 0.3
                        :attack-range   30
                        :damage         5
                        :attack-speed   180
                        :tile-height    1
                        :tile-width     1})

(def barbarian-attributes {:movement-speed 0.25
                           :attack-range   1
                           :damage         5
                           :attack-speed   180
                           :tile-height    1
                           :tile-width     1})

(def town-hall-attributes {:hp          2000
                           :hp-color    red
                           :tile-height 4
                           :tile-width  4})

(def center-anchor (js/PIXI.Point. 0.5 0.5))

(defn background []
  (let [grass (js/PIXI.extras.TilingSprite.
                (sprite/texture-from-image "assets/images/grass-tile.png")
                helper/total-height
                helper/total-width)]
    (ecs/new-entity [(components/new-background grass)])))

(defn barbarian [x y]
  (let [neutral (sprite/from-frame "barbarian/run-down/neutral")
        right (sprite/from-frame "barbarian/run-down/right")
        left (sprite/from-frame "barbarian/run-down/left")
        animations {:moving    {:frames   {:neutral neutral :right right :left left}
                                :sequence [:neutral :left :neutral :right]}
                    :attacking {:frames   {:neutral neutral :left left}
                                :sequence [:neutral :left]}}
        {:keys [movement-speed attack-range damage attack-speed tile-height tile-width]} barbarian-attributes]
    (ecs/new-entity [(components/new-position [x y])
                     (components/new-standing)
                     (components/new-movement movement-speed)
                     (components/new-animation animations nil 0)
                     (components/new-renderable neutral neutral center-anchor [tile-height tile-width])
                     (components/new-attacker attack-range attack-speed damage nil 0)])))

(defn archer [x y]
  (let [neutral (sprite/from-frame "archer/run-down/neutral")
        right (sprite/from-frame "archer/run-down/right")
        left (sprite/from-frame "archer/run-down/left")
        animations {:moving    {:frames   {:neutral neutral :right right :left left}
                                :sequence [:neutral :left :neutral :right]}
                    :attacking {:frames   {:neutral neutral :left left}
                                :sequence [:neutral :left]}}
        {:keys [movement-speed attack-range damage attack-speed tile-height tile-width]} archer-attributes]
    (ecs/new-entity [(components/new-position [x y])
                     (components/new-standing)
                     (components/new-movement movement-speed)
                     (components/new-animation animations nil 0)
                     (components/new-renderable neutral neutral center-anchor [tile-height tile-width])
                     (components/new-attacker attack-range attack-speed damage nil 0)])))

(defn town-hall [x y]
  (let [sprite (sprite/from-frame "town-hall/town-hall")
        {:keys [hp hp-color tile-height tile-width]} town-hall-attributes]
    (ecs/new-entity [(components/new-position [x y])
                     (components/new-renderable sprite sprite center-anchor [tile-height tile-width])
                     (components/new-alive)
                     (components/new-standing)
                     (components/new-health-bar (js/PIXI.Graphics.) hp-color hp)
                     (components/new-attackable hp)])))
