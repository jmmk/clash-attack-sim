(ns clash-attack-sim.systems.pixi
  (:require [maye.core :as ecs]
            [goog.dom :as dom]
            [cljsjs.pixi]
            [clash-attack-sim.util.helper :as helper]
            [clash-attack-sim.entities :as e]))

(enable-console-print!)

(defn remove-children [stage]
  (.removeChildren stage)
  stage)

(defn add-child! [stage child]
  (.addChild stage child)
  stage)

(defn set-pos! [sprite x y]
  (-> sprite
      (.-position)
      (helper/set-property! "x" x)
      (helper/set-property! "y" y))
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

(def clicks (atom []))

(defn stage-click [event]
  (let [data (.-data event)
        target (.-target event)
        point (.getLocalPosition data target)
        x (.-x point)
        y (.-y point)]
    (swap! clicks conj {:x x :y y})))


(defn handle-input [_ _]
  (let [last-clicks @clicks]
    (reset! clicks [])
    (if (seq last-clicks)
      (for [click last-clicks]
        (let [x (:x click)
              y (:y click)
              random-int (inc (.floor js/Math (* (.random js/Math) 639)))]
          (if (< random-int x)
            (e/new-barbarian x y)
            (e/new-archer x y))))
      [])))

(defn render [{:keys [stage renderer]} entities]
  (let [background (filter #(contains? % :background) entities)
        renderable (filter #(contains? % :renderable) entities)]
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
          (let [{:keys [graphics max-hp color]} health-bar
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
                          (.beginFill color)
                          (.drawRect hp-x hp-y hp-width hp-height)
                          (.endFill)))))))
    (.render renderer stage)
    []))


(def rendering-system
  (ecs/new-system
    :name :rendering
    :entity-filters [#(contains? % :background)
                     #(contains? % :renderable)]
    :update-fn render))

(def input-system
  (ecs/new-system
    :name :input
    :entity-filters [(constantly false)]
    :update-filters [(fn [_] (seq @clicks))]
    :update-fn handle-input))
