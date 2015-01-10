(ns clash-attack-sim.main
  (:require [cljs-uuid-utils]
            [goog.Timer]
            [goog.events]
            [clash-attack-sim.targeting :as targeting]
            [clash-attack-sim.movement :as movement]
            [clash-attack-sim.animation :as animation]
            [clash-attack-sim.pathing :as pathing]
            [clash-attack-sim.input :as input]
            [clash-attack-sim.attack :as attack]
            [clash-attack-sim.health :as health]
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
        [(entities/background)
         (entities/barbarian 160 160)
         (entities/town-hall 400 400)
         (entities/town-hall 320 320)])))

;; Initialize global world state
(def world (atom {}))

(defn next-world [world]
  (-> world
      (frame-counter)
      (input/input-system)
      (targeting/targeting-system)
      (pathing/pathing-system)
      (movement/movement-system)
      (attack/attack-system)
      (health/health-system)
      (animation/animation-system)
      (render/rendering-system)))

(defn animation-loop []
  (swap! world next-world)
  (js/requestAnimFrame animation-loop))

(defn initialize []
  (swap! world generate-world)
  (js/requestAnimFrame animation-loop))

;; Preload Assets
(def asset-loader (js/PIXI.AssetLoader. #js ["images/spritesheet.json"
                                             "images/grass-tile.png"]
                                        false))
;; TODO Create a Loading Screen
;;(defn move-loader [])
;;(helper/set-property! asset-loader "onProgress" move-loader)
(helper/set-property! asset-loader "onComplete" initialize)
(.load asset-loader)
