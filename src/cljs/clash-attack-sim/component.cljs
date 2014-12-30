(ns clash-attack-sim.component
  (:require-macros [clash-attack-sim.macro :refer [defcomponent]]))

(defcomponent position [point])
(defcomponent renderable [sprite anchor size])
(defcomponent background [sprite])
(defcomponent attacker [attack-range attack-speed damage target last-attack-frame])
(defcomponent attackable [hp])
(defcomponent movement [velocity])
(defcomponent facing [angle])
(defcomponent animation [sprite-list animation-seq current])

;; State components
(defcomponent attacking [])
(defcomponent alive [])
(defcomponent dead [])
(defcomponent moving [])
(defcomponent standing [])