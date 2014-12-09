(ns clash-attack-sim.ecs)

(defn has-component? [entity name]
    (contains? entity name))

(defn has-components? [entity components]
  (every? (partial has-component? entity) components))

(defn get-component [entity component]
  (get entity component))

(defn assoc-component [entity component]
  (assoc entity (:name component) component))

(defn assoc-components [entity components]
  (reduce #(assoc %1 (:name %2) %2) entity components))

(defn uuid []
  (cljs-uuid-utils/uuid-string (cljs-uuid-utils/make-random-uuid)))

(defn identifier
  ([] (identifier (uuid)))
  ([id] {:name :identifier :id id}))

(defn entity [& components]
  (let [entity (reduce #(assoc %1 (:name %2) %2) {} components)]
    (if (contains? entity :identifier)
      entity
      (assoc-component entity (identifier)))))

(defn get-entity [world id]
  (get-in world [:entities id]))

(defn get-entities [world]
    (vals (:entities world)))

(defn get-entities-with-component [world component]
  (let [entities (get-entities world)]
    (filter #(has-component? % component) entities)))

(defn get-entities-with-components [world & components]
  (let [entities (get-entities world)]
    (filter #(has-components? % components) entities)))

(defn get-id [entity]
  (get-in entity [:identifier :id]))

(defn assoc-entity [world entity]
  (let [id (get-id entity)]
    (assoc-in world [:entities id] entity)))

(defn assoc-entities [world entities]
  (let [entity-map (or (:entities world) {})]
    (->> entities
         (reduce #(assoc %1 (get-id %2) %2) entity-map)
         (assoc world :entities))))

;; Helpers
(defn get-position [entity]
  (let [c (get-component entity :position)]
    (when c
      [(.-x c) (.-y c)])))

(defn get-target [entity]
  (get-in entity [:attacker :target]))

(defn get-velocity [entity]
  (get-in entity [:movement :velocity]))

(defn get-angle [entity]
  (get-in entity [:facing :angle]))

(defn get-sprite [entity]
  (get-in entity [:renderable :sprite]))

(defn get-sprite-list [entity]
  (get-in entity [:animation :sprite-list]))

(defn get-animation-seq [entity]
  (get-in entity [:animation :animation-seq]))

(defn get-current-index [entity]
  (get-in entity [:animation :current]))
