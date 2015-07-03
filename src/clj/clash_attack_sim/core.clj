(ns clash-attack-sim.core
  (:require [bidi.ring :as br]
            [ring.util.response :as resp]))

(def routes ["/" {"" (fn [_] (resp/file-response "index.html"))
                 "assets/" (br/files {:dir "assets/"})}])

(def handler (br/make-handler routes))
