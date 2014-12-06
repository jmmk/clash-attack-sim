(ns clash-attack-sim.component)

(defrecord Position [name x y])
(defn position [x y]
    (Position. :position x y))

(defrecord Renderable [name sprite on-stage])
(defn renderable
  ([sprite]
   (renderable sprite false))
  ([sprite on-stage]
   (Renderable. :renderable sprite on-stage)))

(defrecord Attacker [name target])
(defn attacker [target]
    (Attacker. :attacker target))

(defrecord Attackable [name])
(defn attackable []
    (Attackable. :attackable))
