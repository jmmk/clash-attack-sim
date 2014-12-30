(ns clash-attack-sim.sprite
  (:require [clash-attack-sim.helper :as helper]))

(defn from-frame [image]
  (.fromFrame js/PIXI.Sprite image))

(defn from-image [image]
  (.fromImage js/PIXI.Sprite image))

(defn load-texture [filename]
    (.fromImage js/PIXI.Texture filename false))
