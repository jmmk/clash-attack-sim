(ns clash-attack-sim.template
  (:require [hiccup.page :refer [html5 include-js]]))

(defn index []
  (html5
    [:head
     [:title "Clash of Clans Simulator"]]
    [:body
     [:div {:id "game"}]
     (include-js "bower_components/pixi/bin/pixi.js")
     (include-js "js/clash-attack-sim.js")]))
