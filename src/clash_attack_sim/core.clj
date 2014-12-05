(ns clash-attack-sim.core
  (:require [compojure.core :refer [defroutes GET]]
            [compojure.route :as route]
            [clash-attack-sim.template :as template]))

(defroutes routes
  (GET "/" [] (template/index))
  (route/resources "/")
  (route/not-found "<h1>Page not found</h1>"))
