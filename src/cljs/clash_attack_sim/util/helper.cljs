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
