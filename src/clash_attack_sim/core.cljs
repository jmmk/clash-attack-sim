(ns clash-attack-sim.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [re-com.core :as rc]
            [cljsjs.pixi]
            [goog.dom :as dom]
            [clash-attack-sim.systems.targeting :as targeting]
            [clash-attack-sim.systems.movement :as movement]
            [clash-attack-sim.systems.animation :as animation]
            [clash-attack-sim.systems.pathing :as pathing]
            [clash-attack-sim.systems.attack :as attack]
            [clash-attack-sim.systems.health :as health]
            [clash-attack-sim.systems.pixi :as pixi]
            [clash-attack-sim.systems.standing :as standing]
            [clash-attack-sim.entities :as entities]
            [maye.core :as ecs]))

(enable-console-print!)

(defn canvas []
  [:div {:id    "battlefield"
         :style {:margin-left  "auto"
                 :margin-right "auto"
                 :width        "640px"
                 :height       "640px"}}])

(defn game []
  (let [paused? (rf/subscribe [:paused?])]
    (fn []
      [rc/v-box
       :gap "20px"
       :margin "20px"
       :align :center
       :children [[canvas]
                  [rc/button
                   :label (if @paused? "Unpause" "Pause")
                   :on-click #(rf/dispatch [:toggle-pause])]]])))


(defn add-systems [state]
  (ecs/add-systems state
                   [[targeting/targeting-system 30]
                    [pathing/pathing-system 40]
                    [movement/movement-system 50]
                    [attack/attack-system 50]
                    [health/health-system 60]
                    [animation/animation-system 80]
                    [standing/standing-system 90]
                    [pixi/input-system 99]
                    [pixi/rendering-system 100]]))

(defn new-game-state []
  (-> ecs/new-state
      (add-systems)
      (ecs/add-entities
        [(entities/background)
         (entities/barbarian 160 160)
         (entities/town-hall 400 400)
         (entities/town-hall 320 320)])))

(defn re-trigger-timer []
  (reagent/next-tick #(rf/dispatch [:next-tick])))

(rf/register-sub
  :paused?
  (fn [db]
    (reaction (:paused? @db))))

(rf/register-handler
  :next-tick
  (fn [db _]
    (when-not (:paused? db)
      (re-trigger-timer))
    (ecs/update-state db)))

(rf/register-handler
  :toggle-pause
  (fn [db _]
    (when (:paused? db)
      (re-trigger-timer))
    (update-in db [:paused?] not)))

(rf/register-handler
  :new-game
  (fn [db _]
    (re-trigger-timer)
    (new-game-state)))

(defn ^:export init []
  (reagent/render [game] (dom/getElement "game"))
  (rf/dispatch-sync [:new-game]))

;; Preload Assets
(def asset-loader js/PIXI.loader)
(.add asset-loader #js ["assets/images/spritesheet.json"
                        "assets/images/grass-tile.png"])

;; TODO Create a Loading Screen
; (defn move-loader [loader resources]
;   (println (.-progress loader))
;   (println (.-name resources)))

; (.on asset-loader "progress" move-loader)

(.once asset-loader "complete" init)
(.load asset-loader)
