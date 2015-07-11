(ns clash-attack-sim.systems.render
  (:require [maye.core :as ecs]
            [clash-attack-sim.util.helper :as helper]))

(defn remove-children [stage]
  (.removeChildren stage)
  stage)

(defn add-child! [stage child]
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

(defn render [world entities]
  (let [background (filter #(contains? % :background) entities)
        renderable (filter #(contains? % :renderable) entities)
        stage (:stage world)
        renderer (:renderer world)]
    (remove-children stage)
    (doseq [entity background]
      (add-child! stage (helper/get-bg-sprite entity)))
    (doseq [entity renderable]
      (let [sprite (helper/get-sprite entity)
            anchor (helper/get-anchor entity)
            [height width] (helper/get-size entity)
            [x y] (helper/get-position entity)
            int-x (.round js/Math x)
            int-y (.round js/Math y)
            health-bar (:health-bar entity)]
        (add-child! stage
                    (-> sprite
                        (resize! height width)
                        (set-pos! int-x int-y)
                        (set-anchor! anchor)))
        (when health-bar
          (let [graphics (:graphics health-bar)
                max-hp (:max-hp health-bar)
                hp-color (:color health-bar)
                current-hp (helper/get-hp entity)
                hp-percentage (/ current-hp max-hp)
                hp-height (helper/get-tile-size (/ height 8))
                hp-width (helper/get-tile-size (* hp-percentage width))
                sprite-rect (helper/get-bounds entity)
                top-left-x (.-x sprite-rect)
                top-left-y (.-y sprite-rect)
                hp-x top-left-x
                hp-y (+ top-left-y hp-height)]
          (add-child! stage
            (doto graphics
              (.clear)
              (.beginFill hp-color)
              (.drawRect hp-x hp-y hp-width hp-height)
              (.endFill)))))))
    (.render renderer stage)
    world))

(def rendering-system
  (ecs/system
    :name :rendering
    :matcher-fn #(or (contains? % :background)
                     (contains? % :renderable))
    :update-fn render))
