(ns clash-attack-sim.sprite
  (:require [clash-attack-sim.helper :as helper]))

(defn set-pos! [sprite x y]
  (let [position (.-position sprite)]
    (helper/set-property! position "x" x)
    (helper/set-property! position "y" y))
  sprite)

(defn set-dimension! [sprite dimension tiles]
  (let [size (helper/get-tile-size tiles)]
    (helper/set-property! sprite dimension size))
  sprite)

(defn resize! [sprite width height]
  (set-dimension! sprite "width" width)
  (set-dimension! sprite "height" height))

(defn from-frame [image]
  (.fromFrame js/PIXI.Sprite image))

(defn from-image [image]
  (.fromImage js/PIXI.Sprite image))

(defn load-texture [filename]
    (.fromImage js/PIXI.Texture filename false))
