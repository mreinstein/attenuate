[![Build Status](https://travis-ci.org/mreinstein/attenuate.svg?branch=master)](https://travis-ci.org/mreinstein/attenuate)

# attenuate

[![Greenkeeper badge](https://badges.greenkeeper.io/mreinstein/attenuate.svg)](https://greenkeeper.io/)
general purpose attenuation functions (linear, quadratic, etc.)

## api

### linear
`result = linear(distance, maxDistance)`

### quadratic
`result = quadratic(distance, maxDistance)`


## example

```javascript
const linear = require('attenuate/linear')

const maxDistance = 1000
console.log(linear(0, maxDistance))     // 1.0
console.log(linear(100, maxDistance))   // 0.9
console.log(linear(500, maxDistance))   // 0.5
console.log(linear(1000, maxDistance))  // 0.0
console.log(linear(1001, maxDistance))  // 0.0
```
