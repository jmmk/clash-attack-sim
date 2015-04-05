(ns clash-attack-sim.core
  (:require [bidi.ring :refer [make-handler resources]]
            [ring.util.response :refer [response]]
            [clash-attack-sim.template :as template]))

(def routes ["" {"/" :index
                 "" :resources}])

(def handlers {:index (fn [req]
                        (response (template/index)))
               :resources (resources {:prefix "public"})})

(def run (make-handler routes handlers))
