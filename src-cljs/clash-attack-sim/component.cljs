(ns clash-attack-sim.component)

(defrecord Position [name x y])
(defn position [x y]
    (Position. :position x y))

(defrecord Renderable [name sprite])
(defn renderable [sprite]
   (Renderable. :renderable sprite))

(defrecord Attacker [name target])
(defn attacker [target]
    (Attacker. :attacker target))

(defrecord Attackable [name])
(defn attackable []
    (Attackable. :attackable))

;; TODO
;; (defrecord Animation [name animation-fn])
;; (defrecord Rotation [name angle])
;; (defrecord Movement [name velocity])
;; (defrecord Collision [name bounds])
