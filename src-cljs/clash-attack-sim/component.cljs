(ns clash-attack-sim.component
  (:require-macros [clash-attack-sim.macro :refer [defcomponent]]))

(defcomponent position [x y])
(defcomponent renderable [sprite])
(defcomponent attacker [target])
(defcomponent attackable [])
(defcomponent movement [velocity])
(defcomponent facing [angle])
(defcomponent animation [sprite-list animation-seq current])

;; TODO
;; (defcomponent collision [name bounds])
