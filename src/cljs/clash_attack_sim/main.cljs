(ns clash-attack-sim.main
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [cljsjs.pixi]
            [goog.dom :as dom]
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
            [clash-attack-sim.standing :as standing]
            [clash-attack-sim.ecs :as ecs]))

(enable-console-print!)

(defn canvas []
  [:div {:id "battlefield"
         :style {:margin-left "auto"
                 :margin-right "auto"
                 :width "640px"
                 :height "640px"}}])

(defn game []
  [:div {:id "clash-attack-sim"}
   [canvas]])

(defn init-renderer []
  (let [renderer (js/PIXI.autoDetectRenderer. helper/total-width helper/total-height)
        view (.-view renderer)
        anchor (dom/getElement "battlefield")]
    (.appendChild anchor view)
    renderer))

(defn init-stage []
  (let [stage (js/PIXI.Container. 0xFFFFFF)]
    (helper/set-property! stage "interactive" true)
    (helper/set-property! stage "click" input/stage-click)
    stage))

(defn frame-counter [world]
  (let [frame-count (:frame-count world)]
    (assoc world :frame-count (inc frame-count))))

(defn new-game-state []
  (-> {:renderer (init-renderer)
       :stage (init-stage)
       :frame-count 0}
      (ecs/assoc-entities
        [(entities/background)
         (entities/barbarian 160 160)
         (entities/town-hall 400 400)
         (entities/town-hall 320 320)])))

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
      (standing/standing-system)
      (render/rendering-system)))

(defn re-trigger-timer []
  (reagent/next-tick (fn [] (re-frame/dispatch [:next-tick]))))

(re-frame/register-handler
  :next-tick
  (fn [db _]
    (re-trigger-timer)
    (next-world db)))

(re-frame/register-handler
  :new-game
  (fn [db _]
    (re-trigger-timer)
    (new-game-state)))

(defn init []
  (reagent/render [game] (dom/getElement "game"))
  (re-frame/dispatch-sync [:new-game]))

;; Preload Assets
(def asset-loader js/PIXI.loader)
(.add asset-loader #js ["images/spritesheet.json"
                        "images/grass-tile.png"])

;; TODO Create a Loading Screen
;;(defn move-loader [])
;;(.on asset-loader "progress" move-loader)
(.once asset-loader "complete" init)
(.load asset-loader)
