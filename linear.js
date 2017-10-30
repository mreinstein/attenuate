'use strict'

// https://developer.valvesoftware.com/wiki/Constant-Linear-Quadratic_Falloff#Linear_Attenuation

// the decline of this type of falloff is linear, inversely proportial to the distance from the
// source (I = 1/d where I is intensity and d is distance). This means that the intensity 
// (set by its magnitude/brightness) will diminish (at a fixed rate) as it travels from its source. 

// n the real world a 100% linear lightsource would be practically impossible, as it would represent
//  a real world soft light of infinite size, but in the virtual world, a 0:1:0 lightsource is 
// believable for most entity based lightsources.
module.exports = function linear(distance, maxDistance) {
  if (distance > maxDistance) return 0

  // http://gamedev.stackexchange.com/questions/21057/does-the-linear-attenuation-component-in-lighting-models-have-a-physical-counter
  return 1 - (distance / maxDistance)
}
