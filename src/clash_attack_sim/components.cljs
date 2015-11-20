(ns clash-attack-sim.components)

(defn new-position [point]
  {:name  :position
   :point point})

(defn new-renderable [default-sprite current-sprite anchor size]
  {:name           :renderable
   :default-sprite default-sprite
   :current-sprite current-sprite
   :anchor         anchor
   :size           size})

(defn new-background [sprite]
  {:name   :background
   :sprite sprite})

(defn new-attacker [attack-range attack-speed damage target last-attack-frame]
  {:name              :attacker
   :attack-range      attack-range
   :attack-speed      attack-speed
   :damage            damage
   :target            target
   :last-attack-frame last-attack-frame})

(defn new-attackable [hp]
  {:name :attackable
   :hp   hp})

(defn new-movement [velocity]
  {:name     :movement
   :velocity velocity})

(defn new-facing [angle]
  {:name  :facing
   :angle angle})

(defn new-animation [animations current-animation current-frame]
  {:name              :animation
   :animations        animations
   :current-animation current-animation
   :current-frame     current-frame})

(defn new-health-bar [graphics color max-hp]
  {:name     :health-bar
   :graphics graphics
   :color    color
   :max-hp   max-hp})

;; State components
(def new-attacking {:name :attacking})
(def new-animating {:name :animating})
(def new-alive {:name :alive})
(def new-dead {:name :dead})
(def new-moving {:name :moving})
(def new-standing {:name :standing})
