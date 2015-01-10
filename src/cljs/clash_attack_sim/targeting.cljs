(ns clash-attack-sim.targeting
  (:require-macros [clash-attack-sim.macro :refer [defsystem]])
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.component :as component]))

(defn can-attack? [a b attack-range]
  "Check if the outer bounds of two sprites are within attack-range
  http://stackoverflow.com/questions/8017541/javascript-canvas-collision-detection"

  (let [a-rect (ecs/get-bounds a)
        b-rect (ecs/get-bounds b)
        [a-x a-y] (ecs/get-position a)
        [b-x b-y] (ecs/get-position b)
        a-height (.-height a-rect)
        a-width (.-width a-rect)
        b-height (.-height b-rect)
        b-width (.-width b-rect)
        a-half-height (/ a-height 2)
        a-half-width (/ a-width 2)
        b-half-height (/ b-height 2)
        b-half-width (/ b-width 2)
        a-left (- (- a-x a-half-width) attack-range)
        a-right (+ (+ a-x a-half-width) attack-range)
        b-left (- b-x b-half-width)
        b-right (+ b-x b-half-width)
        a-top (- (- a-y a-half-height) attack-range)
        a-bottom (+ (+ a-y a-half-height) attack-range)
        b-top (- b-y b-half-height)
        b-bottom (+ b-y b-half-height)]
    (not (or (> a-left b-right)
             (> b-left a-right)
             (> a-top b-bottom)
             (> b-top a-bottom)))))

(defn get-distance [a b]
  "Find straight-line distance between the center of two entities"

  (let [[a-x a-y] (ecs/get-position a)
        [b-x b-y] (ecs/get-position b)
        delta-x (js/Math.abs (- a-x b-x))
        delta-y (js/Math.abs (- a-y b-y))
        delta-x-squared (js/Math.pow delta-x 2)
        delta-y-squared (js/Math.pow delta-y 2)]
  (js/Math.sqrt (+ delta-x-squared delta-y-squared))))

(defn find-target [attacker alive]
  (apply min-key (partial get-distance attacker) alive))

(defn get-action [should-move?]
  (if should-move?
    (component/moving)
    (component/attacking)))

(defn get-targets [world attackers alive]
  (ecs/assoc-entities world
                      (for [attacker attackers]
                        (let [velocity (ecs/get-velocity attacker)
                              attack-range (ecs/get-attack-range attacker)
                              attack-speed (ecs/get-attack-speed attacker)
                              damage (ecs/get-damage attacker)
                              last-attack-frame (ecs/get-last-attacked attacker)
                              target (find-target attacker alive)
                              should-move? (not (can-attack? attacker target attack-range))]
                          (-> attacker
                              (ecs/remove-components [(component/moving)
                                                      (component/attacking)])
                              (ecs/assoc-components [(component/movement velocity)
                                                     (get-action should-move?)
                                                     (component/attacker attack-range attack-speed damage target last-attack-frame)]))))))

(defsystem targeting [world]
  :entities {attackers [:attacker]
             alive [:attackable :alive]}
  :frame-period 5
  :fn get-targets)
