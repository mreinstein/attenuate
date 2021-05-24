[![Build Status](https://travis-ci.org/mreinstein/attenuate.svg?branch=master)](https://travis-ci.org/mreinstein/attenuate)

# attenuate

general purpose attenuation functions (linear, quadratic, etc.)

## api
These functions are generic, but described in terms of representing a light source.
They take the form of

```javascript
result = attenuationType(distance, maxDistance)
```

`maxDistance` specifies the maximum distance attenuation can occur over. For example if you are simulating
a light source, and don't want the light to have any contribution beyond a distance of 500, set `maxDistance` to 500.

`result` is a value from `0.0` -> `1.0` with `0.0` being complete attenuation, and `1.0` being no attenuation.



### linear
The decline of this type of falloff is linear, inversely proportial to the distance from the
source:

`I = 1/d`

where `I` is intensity and `d` is distance). This means that the intensity
(set by its magnitude/brightness) will diminish (at a fixed rate) as it travels from its source.

In the real world a 100% linear lightsource would be practically impossible, as it would represent
a real world soft light of infinite size, but in the virtual world, a 0:1:0 lightsource is
believable for most entity based lightsources.

`result = linear(distance, maxDistance)`


### quadratic
The attenuation of a 100% quadratic light is exponential (quadratic), expressed as:

`I = 1/d^2`

meaning that the further the light travels from its source, the more it will be diminished.
This creates a very sharp drop in light.

A quadratic lightsource represents a pure "point light source" in the real world. In the virtual
world, this effect looks like a lightsource shining through murky water, looking far from typical
real world lightsource behavior.

When used in moderation, quadratic attenuation can be used not only for small lightsources, but
also to reflect light travelling through something more dispersing than air, like air humidity
(like fog) or water.

`result = quadratic(distance, maxDistance)`


## example

```javascript
import { linear } from 'attenuate'


const maxDistance = 1000
console.log(linear(0, maxDistance))     // 1.0
console.log(linear(100, maxDistance))   // 0.9
console.log(linear(500, maxDistance))   // 0.5
console.log(linear(1000, maxDistance))  // 0.0
console.log(linear(1001, maxDistance))  // 0.0
```
