(ns clash-attack-sim.macro
  (:require [clojure.string :as string]))

(defmacro defcomponent [name fields]
  "Defining a component using the syntax:
  (defcomponent position [x y])

  Generates a record type:
  (defrecord Position [name x y])

  And a helper function to create a new record:
  (defn position [x y]
    (Position. :position x y))"

  (let [capital-name (symbol (string/capitalize name))
        record-constructor (symbol (str capital-name "."))
        lowercase-name (symbol (string/lower-case name))
        keyword-name (keyword lowercase-name)]
    `(do (defrecord ~capital-name ~(into '[name] fields))
          (defn ~lowercase-name ~fields
                (~record-constructor ~keyword-name ~@fields)))))
