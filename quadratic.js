'use strict'

// https://developer.valvesoftware.com/wiki/Constant-Linear-Quadratic_Falloff#Quadratic_Attenuation

// the attenuation of a 100% quadratic light is exponential (quadratic), expressed as "I = 1/d^2",
// meaning that the further the light travels from its source, the more it will be diminished.
// This creates a very sharp drop in light.

// A quadratic lightsource represents a pure "point light source" in the real world. In the virtual
// world, this effect looks like a lightsource shining through murky water, looking far from typical
// real world lightsource behavior.

// When used in moderation, quadratic attenuation can be used not only for small lightsources, but
// also to reflect light travelling through something more dispersing than air, like air humidity
// (like fog) or water.

module.exports = function quadratic(distance, maxDistance) {
  if (distance > maxDistance) return 0

  return (distance < 0.01) ? 1 : (1 / (distance * distance))
}
