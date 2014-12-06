(ns clash-attack-sim.ecs)

(defn has-component? [entity name]
    (contains? entity name))

(defn get-component [entity component]
  (get entity component))

(defn assoc-component [entity component]
  (assoc entity (:name component) component))

(defn uuid []
  (cljs-uuid-utils/uuid-string (cljs-uuid-utils/make-random-uuid)))

(defn identifier
  ([] (identifier (uuid)))
  ([id] {:name :identifier :id id}))

(defn entity [& components]
  (let [entity (reduce #(assoc %1 (:name %2) %2)
                       {}
                       components)]
    (if (contains? entity :identifier)
      entity
      (assoc-component entity (identifier)))))

(defn get-entity [world id]
  (get-in world [:entities id]))

(defn get-entities [world]
    (vals (:entities world)))

(defn assoc-entity [world entity]
  (let [id (-> entity
               (get-component :identifier)
               :id)]
    (assoc-in world [:entities id] entity)))

(defn get-id [entity]
    (-> entity (get-component :identifier) :id))

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
  (let [c (get-component entity :attacker)]
    (when c
      (.-target c))))

(defn get-velocity [entity]
  (let [c (get-component entity :movement)]
    (when c
      (.-velocity c))))
