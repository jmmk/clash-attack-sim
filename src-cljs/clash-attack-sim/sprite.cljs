(ns clash-attack-sim.sprite
  (:require [clash-attack-sim.helper :as helper]))

(defn set-pos! [sprite axis value]
  (let [position (.-position sprite)]
    (helper/set-property! position axis value))
  sprite)

(defn set-dimension! [sprite dimension tiles]
  (let [size (helper/get-tile-size tiles)]
    (helper/set-property! sprite dimension size))
  sprite)
