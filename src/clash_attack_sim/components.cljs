(ns clash-attack-sim.components
  (:require [maye.core :as ecs]))

(defn new-position [point]
  (ecs/new-component
    {:name  :position
     :point point}))

(defn new-renderable [default-sprite current-sprite anchor size]
  (ecs/new-component
    {:name           :renderable
     :default-sprite default-sprite
     :current-sprite current-sprite
     :anchor         anchor
     :size           size}))

(defn new-background [sprite]
  (ecs/new-component
    {:name   :background
     :sprite sprite}))

(defn new-attacker [attack-range attack-speed damage target last-attack-frame]
  (ecs/new-component
    {:name              :attacker
     :attack-range      attack-range
     :attack-speed      attack-speed
     :damage            damage
     :target            target
     :last-attack-frame last-attack-frame}))

(defn new-attackable [hp]
  (ecs/new-component
    {:name :attackable
     :hp   hp}))

(defn new-movement [velocity]
  (ecs/new-component
    {:name     :movement
     :velocity velocity}))

(defn new-facing [angle]
  (ecs/new-component
    {:name  :facing
     :angle angle}))

(defn new-animation [animations current-animation current-frame]
  (ecs/new-component
    {:name              :animation
     :animations        animations
     :current-animation current-animation
     :current-frame     current-frame}))

(defn new-health-bar [graphics color max-hp]
  (ecs/new-component
    {:name     :health-bar
     :graphics graphics
     :color    color
     :max-hp   max-hp}))

;; State components
(def new-attacking (ecs/new-component {:name :attacking}))
(def new-animating (ecs/new-component {:name :animating}))
(def new-alive (ecs/new-component {:name :alive}))
(def new-dead (ecs/new-component {:name :dead}))
(def new-moving (ecs/new-component {:name :moving}))
(def new-standing (ecs/new-component {:name :standing}))
