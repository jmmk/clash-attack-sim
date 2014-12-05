(ns clash-attack-sim.main
  (:require [cljs-uuid-utils]
            [goog.Timer]
            [goog.events]))

;; Tiles are 16px x 16px
(def^:const tile-size 16)

;; Grid size in tiles
(def^:const grid-x-size 40)
(def^:const grid-y-size 40)

(def ^:const barbarian-speed 0.03)

(def ^:const update-world-interval 16)

(defrecord Position [name x y])
(defn position [x y]
  (Position. :position x y))

(defrecord Renderable [name sprite])
(defn renderable [sprite]
  (Renderable. :renderable sprite))

(defrecord Attacker [name target])
(defn attacker [target]
  (Attacker. :attacker target))

(defrecord Attackable [name])
(defn attackable []
  (Attackable. :attackable))

(defn get-tile-size [tiles]
  (* tile-size tiles))

(def total-width (get-tile-size grid-x-size))
(def total-height (get-tile-size grid-y-size))

(defn uuid []
  (cljs-uuid-utils/uuid-string (cljs-uuid-utils/make-random-uuid)))

(defn identifier
  ([] (identifier (uuid)))
  ([id] {:name :identifier :id id}))

(defn assoc-component [entity component]
  (assoc entity (:name component) component))

(defn entity [& components]
  (let [entity (reduce #(assoc %1 (:name %2) %2)
                       {}
                       components)]
    (if (contains? entity :identifier)
      entity
      (assoc-component entity (identifier)))))

(defn get-component [entity component]
  (get entity component))

(defn get-entity [world id]
  (get-in world [:entities id]))

(defn get-position [entity]
  (let [c (get-component entity :position)]
    (when c
      [(.-x c) (.-y c)])))

(defn get-id [entity]
    (-> entity (get-component :identifier) :id))

(defn get-entities [world]
  (vals (:entities world)))

(defn assoc-entities [world entities]
  (let [entity-map (or (:entities world) {})]
    (->> entities
         (reduce #(assoc %1 (get-id %2) %2) entity-map)
         (assoc world :entities))))

(defn has-component? [entity name]
    (contains? entity name))

(defn assoc-entity [world entity]
  (let [id (-> entity
               (get-component :identifier)
               :id)]
    (assoc-in world [:entities id] entity)))

(defn load-texture [filename]
  (.fromImage js/PIXI.Texture filename false))

(defn set-x! [sprite pos]
  (set! (.-x (.-position sprite)) pos))

(defn set-y! [sprite pos]
  (set! (.-y (.-position sprite)) pos))

(defn set-width! [sprite tiles]
  (set! (.-width sprite) (get-tile-size tiles)))

(defn set-height! [sprite tiles]
  (set! (.-height sprite) (get-tile-size tiles)))

(defn get-distance [a b]
  (let [delta-x (js/Math.abs (- a.x b.x))
        delta-y (js/Math.abs (- a.y b.y))]
    (js/Math.sqrt (+ delta-x delta-y))))

(defn find-target
  [attacker all-attackable]
  (apply min-key (partial get-distance attacker) (seq all-attackable)))

(defn move-towards [target attacker]
  (if (> target attacker)
    (+ attacker (* barbarian-speed tile-size))
    (if (= target attacker)
      attacker
      (- attacker (* barbarian-speed tile-size)))))

(defn attack-system [world]
  (let [entities (get-entities world)
        attackers (filter #(has-component? % :attacker) entities)
        all-attackable (filter #(has-component? % :attackable) entities)]
    (when-not (empty? all-attackable)
      (assoc-entities world
                      (for [attacker attackers]
                        (let [target (find-target attacker all-attackable)
                              [target-x target-y] (get-position target)
                              [attacker-x attacker-y] (get-position attacker)
                              final-x (move-towards target-x attacker-x)
                              final-y (move-towards target-y attacker-y)]
                          (assoc-component attacker (position final-x final-y))))))))

(def stage
  (let [stage (js/PIXI.Stage. 0xFFFFFF)]
    (set! (.-interactive stage) true)
    stage))

(defn barbarian [x y]
  (let [sprite (js/PIXI.Sprite. (load-texture "images/barbarian.png"))]
    (set-x! sprite x)
    (set-y! sprite y)
    (set-height! sprite 1)
    (set-width! sprite 1)
    (.addChild stage sprite)

    (entity (position x y)
            (renderable sprite)
            (attacker nil))))

(def clicks (atom {}))
(defn stage-click [data]
  (let [target (.-target data)
        point (.getLocalPosition data target)
        x (.-x point)
        y (.-y point)]
    (reset! clicks {:x x :y y})))

(set! (.-click stage) stage-click)
(defn input-system [world]
  (if-not (empty? @clicks)
    (let [x (:x @clicks)
          y (:y @clicks)]
      (reset! clicks {})
      (assoc-entity world (barbarian x y)))
    world))

(defn town-hall [x y]
  (let [sprite (js/PIXI.Sprite. (load-texture "images/town-hall.png"))]
    (set-x! sprite x)
    (set-y! sprite y)
    (set-height! sprite 4)
    (set-width! sprite 4)
    (.addChild stage sprite)

    (entity (position x y)
            (renderable sprite)
            (attackable))))

(defn add-barbarian-system [world]
    (assoc-entity world (barbarian
                          (+ (* (.random js/Math) 500) 100)
                          (+ (* (.random js/Math) 500) 100))))

(def grass (js/PIXI.TilingSprite.
             (load-texture "images/grass-tile.png")
             total-height
             total-width))
(.addChild stage grass)

(defn generate-world [world]
  (assoc-entities world
                  [(barbarian 160 160)
                   (town-hall 320 320)]))

;; Initialize global world state
(def world (atom {}))

;; Set initial state
(swap! world generate-world)

(def renderer (js/PIXI.autoDetectRenderer. total-width total-height))
(def anchor (.getElementById js/document "battlefield"))
(.appendChild anchor (.-view renderer))

(defn render! [renderer stage world]
  (doseq [e (filter #(has-component? % :renderable) (get-entities world))]
    (let [sprite (.-sprite (get-component e :renderable))]
      (when-not (nil? sprite)
        (let [[x y] (get-position e)
              sprite-pos (.-position sprite)]
          (set! (.-x sprite-pos) x)
          (set! (.-y sprite-pos) y)))))
  (.render renderer stage))

(defn next-world [world]
  (-> world
      (input-system)
      (attack-system)))

(defn animation-loop []
  (render! renderer stage @world)
  (js/requestAnimFrame animation-loop))

(defn update-game-state []
  (.callOnce goog.Timer #(swap! world next-world)))

(let [timer (goog.Timer. update-world-interval)]
  (. timer (start))
  (goog.events/listen timer goog.Timer/TICK update-game-state))

(js/requestAnimFrame animation-loop)
