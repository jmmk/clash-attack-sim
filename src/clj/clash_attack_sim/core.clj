(ns clash-attack-sim.core
  (:require [bidi.ring :refer [make-handler resources]]
            [ring.util.response :refer [response]]
            [clash-attack-sim.template :as template]))

(def routes ["/" {"" :index
                 "resources/" (resources {})}])

(def handlers {:index (fn [req]
                        (response (template/index)))})

(def run (make-handler routes (some-fn handlers #(when (fn? %) %))))
