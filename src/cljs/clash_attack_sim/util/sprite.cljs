(ns clash-attack-sim.util.sprite
  (:require [cljsjs.pixi]))

(defn from-frame [image]
  (.fromFrame js/PIXI.Sprite image))

(defn from-image [image]
  (.fromImage js/PIXI.Sprite image))

(defn texture-from-frame [image]
  (.fromFrame js/PIXI.Texture image))

(defn texture-from-image [filename]
    (.fromImage js/PIXI.Texture filename false))
