(ns clash-attack-sim.render
  (:require-macros [clash-attack-sim.macro :refer [defsystem]])
  (:require [clash-attack-sim.ecs :as ecs]
            [clash-attack-sim.helper :as helper]
            [clash-attack-sim.component :as component]
            [clash-attack-sim.sprite :as sprite]
            [clash-attack-sim.input :as input]))

(defn remove-children [stage]
  (.removeChildren stage)
  stage)

(defn add-child [stage child]
  (.addChild stage child)
  stage)

(defn set-pos! [sprite x y]
  (let [position (.-position sprite)]
    (-> sprite
        (.-position)
        (helper/set-property! "x" x)
        (helper/set-property! "y" y)))
  sprite)

(defn set-anchor! [sprite point]
  (helper/set-property! sprite "anchor" point))

(defn set-dimension! [sprite dimension tiles]
  (let [size (helper/get-tile-size tiles)]
    (helper/set-property! sprite dimension size)))

(defn resize! [sprite height width]
  (-> sprite
    (set-dimension! "height" height)
    (set-dimension! "width" width)))

(defn render [world background renderable]
  (let [stage (:stage world)
        renderer (:renderer world)]
    (doseq [entity background]
      (add-child stage (ecs/get-bg-sprite entity)))
    (doseq [entity renderable]
      (let [sprite (ecs/get-sprite entity)
            anchor (ecs/get-anchor entity)
            [height width] (ecs/get-size entity)
            [x y] (ecs/get-position entity)
            int-x (.round js/Math x)
            int-y (.round js/Math y)]
        (add-child stage
                   (-> sprite
                       (resize! height width)
                       (set-pos! int-x int-y)
                       (set-anchor! anchor)))))
    (.render renderer stage)
    world))

(defsystem rendering [world]
  :entities {background [:background]
             renderable [:renderable]}
  :frame-period 1
  :fn render)
