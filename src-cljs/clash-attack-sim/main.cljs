(ns clash-attack-sim.main
  (:require [cljs-uuid-utils]
            [goog.Timer]
            [goog.events]
            [clash-attack-sim.targeting :as targeting]
            [clash-attack-sim.movement :as movement]
            [clash-attack-sim.animation :as animation]
            [clash-attack-sim.pathing :as pathing]
            [clash-attack-sim.input :as input]
            [clash-attack-sim.helper :as helper]
            [clash-attack-sim.render :as render]
            [clash-attack-sim.entities :as entities]
            [clash-attack-sim.ecs :as ecs]))

(defn init-renderer []
  (let [renderer (js/PIXI.autoDetectRenderer. helper/total-width helper/total-height)
        view (.-view renderer)
        anchor (.getElementById js/document "battlefield")]
    (.appendChild anchor view)
    renderer))

(defn init-stage []
  (let [stage (js/PIXI.Stage. 0xFFFFFF)]
    (helper/set-property! stage "interactive" true)
    (helper/set-property! stage "click" input/stage-click)
    stage))

(defn frame-counter [world]
  (let [frame-count (:frame-count world)]
    (assoc world :frame-count (inc frame-count))))

(defn generate-world [world]
  (-> world
      (assoc :renderer (init-renderer))
      (assoc :stage (init-stage))
      (assoc :frame-count 0)
      (ecs/assoc-entities
        [(entities/barbarian 160 160)
         (entities/town-hall 320 320)])))

;; Initialize global world state
(def world (atom {}))

;; Set initial state
(swap! world generate-world)

(defn next-world [world]
  (-> world
      (frame-counter)
      (input/input-system)
      (targeting/targeting-system)
      (pathing/pathing-system)
      (movement/movement-system)
      (animation/animation-system)
      (render/rendering-system)))

(defn animation-loop []
  (swap! world next-world)
  (js/requestAnimFrame animation-loop))

(js/requestAnimFrame animation-loop)
