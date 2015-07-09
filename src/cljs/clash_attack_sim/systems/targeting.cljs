(ns clash-attack-sim.systems.targeting
  (:require [clash-attack-sim.util.helper :as h]
            [maye.core :as ecs]
            [clash-attack-sim.components :as components]))

(defn can-attack? [a b attack-range]
  "Check if the outer bounds of two sprites are within attack-range
  http://stackoverflow.com/questions/8017541/javascript-canvas-collision-detection"

  (let [a-rect (h/get-bounds a)
        b-rect (h/get-bounds b)
        [a-x a-y] (h/get-position a)
        [b-x b-y] (h/get-position b)
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

  (let [[a-x a-y] (h/get-position a)
        [b-x b-y] (h/get-position b)
        delta-x (js/Math.abs (- a-x b-x))
        delta-y (js/Math.abs (- a-y b-y))
        delta-x-squared (js/Math.pow delta-x 2)
        delta-y-squared (js/Math.pow delta-y 2)]
  (js/Math.sqrt (+ delta-x-squared delta-y-squared))))

(defn find-target [attacker alive]
  (apply min-key (partial get-distance attacker) alive))

(defn get-action [should-move?]
  (if should-move?
    (components/moving)
    (components/attacking)))

(defn get-targets [world entities]
  (let [attackers (filter #(contains? % :attacker) entities)
        attackable (filter #(contains? % :attackable) entities)
        alive (filter #(contains? % :alive) attackable)]
    (if (seq alive)
      (ecs/assoc-entities world
                          (for [attacker attackers]
                            (let [velocity (h/get-velocity attacker)
                                  attack-range (h/get-attack-range attacker)
                                  attack-speed (h/get-attack-speed attacker)
                                  damage (h/get-damage attacker)
                                  last-attack-frame (h/get-last-attacked attacker)
                                  target (find-target attacker alive)
                                  should-move? (not (can-attack? attacker target attack-range))]
                              (-> attacker
                                  (ecs/remove-components [(components/moving)
                                                          (components/attacking)
                                                          (components/standing)])
                                  (ecs/assoc-components [(components/movement velocity)
                                                         (get-action should-move?)
                                                         (components/attacker attack-range attack-speed damage target last-attack-frame)])))))
      (ecs/assoc-entities world
                          (for [attacker attackers]
                            (-> attacker
                                (ecs/remove-components [(components/moving)
                                                        (components/attacking)])
                                (ecs/assoc-component (components/standing))))))))

(def targeting-system
  (ecs/system
    :name :targeting
    :matcher-fn #(or (contains? % :attacker)
                     (contains? % :attackable))
    :run-when (ecs/frame-period 5)
    :update-fn get-targets))
