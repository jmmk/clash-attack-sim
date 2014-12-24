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

(defmacro defsystem [name args & attributes]
  "Define a system using the syntax:
  (defsystem attack [world]
    :entities {attacking [:attacker :attacking]
                alive [:attackable :alive]}
    :frame-period 5
    :fn do-attacks)

  Generates:
  (defn attack-system [world]
    (if (= (mod (:frame-count world) 5) 0)
      (let [attackers (ecs/get-entities-with-components :attacker :attacking)
            alive (ecs/get-entities-with-components :attackable :alive)]
        (if-not (and (empty? attackers)
                     (empty? alive))
          (do-attacks world attackers alive)
          world))
      world))"

  (let [function-name (symbol (str name "-system"))
        attr-map (apply hash-map attributes)
        entities (:entities attr-map)
        frame-period (:frame-period attr-map)
        function (:fn attr-map)]
    (list 'defn function-name args
          (list 'if
                (list '=
                      (list 'mod (list ':frame-count 'world) frame-period)
                      0)
                (list 'let (into [] (apply concat (seq (into {} (for [[k v] entities
                                                         :let [new-v (list 'apply 'ecs/get-entities-with-components (list 'into '[world] v))]]
                                                         [k new-v])))))
                                 (list 'if (into (for [k (keys entities)]
                                                            (list 'seq k)) '(and))
                                       (list 'apply function (into '[world] (keys entities)))
                                       'world))
                'world))))
