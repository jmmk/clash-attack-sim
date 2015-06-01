(ns clash-attack-sim.sprite
  (:require [cljsjs.pixi]
            [clash-attack-sim.helper :as helper]))

(defn from-frame [image]
  (.fromFrame js/PIXI.Sprite image))

(defn from-image [image]
  (.fromImage js/PIXI.Sprite image))

(defn texture-from-frame [image]
  (.fromFrame js/PIXI.Texture image))

(defn texture-from-image [filename]
    (.fromImage js/PIXI.Texture filename false))
