(ns clash-attack-sim.util.helper)

;; Tiles are 16px x 16px
(def^:const tile-size 16)

;; Grid size in tiles
(def^:const grid-x-size 40)
(def^:const grid-y-size 40)

(defn get-tile-size [tiles]
  (* tile-size tiles))

(def total-width (get-tile-size grid-x-size))
(def total-height (get-tile-size grid-y-size))

(defn set-property! [obj prop value]
    (aset obj prop value)
      obj)

;; Get component properties in entities
(defn get-position [entity]
  (get-in entity [:position :point]))

(defn get-target [entity]
  (get-in entity [:attacker :target]))

(defn get-velocity [entity]
  (get-in entity [:movement :velocity]))

(defn get-angle [entity]
  (get-in entity [:facing :angle]))

(defn get-bg-sprite [entity]
  (get-in entity [:background :sprite]))

(defn get-sprite [entity]
  (get-in entity [:renderable :current-sprite]))

(defn get-anchor [entity]
  (get-in entity [:renderable :anchor]))

(defn get-size [entity]
  (get-in entity [:renderable :size]))

(defn get-current-index [entity]
  (get-in entity [:animation :current-frame]))

(defn get-attack-range [entity]
  (get-in entity [:attacker :attack-range]))

(defn get-attack-speed [entity]
  (get-in entity [:attacker :attack-speed]))

(defn get-damage [entity]
  (get-in entity [:attacker :damage]))

(defn get-hp [entity]
  (get-in entity [:attackable :hp]))

(defn get-last-attacked [entity]
  (get-in entity [:attacker :last-attack-frame]))

(defn get-current-animation [entity]
  (let [{:keys [animation]} entity
        {:keys [animations current-animation]} animation]
    (current-animation animations)))

(defn did-attack? [entity frame]
  (= frame (get-last-attacked entity)))

(defn get-attackers [entity attackers]
  (filter #(= (get-target %) entity) attackers))

(defn get-bounds [entity]
  (.getBounds
      (get-in entity [:renderable :current-sprite])))
