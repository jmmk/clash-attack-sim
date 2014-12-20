(ns clash-attack-sim.component
  (:require-macros [clash-attack-sim.macro :refer [defcomponent]]))

(defcomponent position [point])
(defcomponent renderable [sprite anchor size])
(defcomponent background [sprite])
(defcomponent attacker [attack-range target])
(defcomponent attackable [])
(defcomponent movement [velocity])
(defcomponent action [state])
(defcomponent facing [angle])
(defcomponent animation [sprite-list animation-seq current])
