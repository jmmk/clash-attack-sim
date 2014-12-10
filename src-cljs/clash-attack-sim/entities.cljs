(ns clash-attack-sim.entities
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]
            [clash-attack-sim.sprite :as sprite]
            [clash-attack-sim.helper :as helper]))

(def ^:const barbarian-speed 0.25)

(def center-anchor (js/PIXI.Point. 0.5 0.5))

(defn barbarian [x y]
  (let [neutral (sprite/from-frame "barbarian-neutral-down.png")
        right (sprite/from-frame "barbarian-run-right-down.png")
        left (sprite/from-frame "barbarian-run-left-down.png")
        sprite-list {:neutral neutral :right right :left left}
        animation-seq [:neutral :left :neutral :right]]
    (ecs/entity (component/position [x y])
                (component/movement barbarian-speed)
                (component/animation sprite-list animation-seq 0)
                (component/renderable neutral center-anchor [1 1])
                (component/attacker nil))))

(defn town-hall [x y]
  (let [sprite (sprite/from-image "images/town-hall.png")]
    (ecs/entity (component/position [x y])
            (component/renderable sprite center-anchor [4 4])
            (component/attackable))))
