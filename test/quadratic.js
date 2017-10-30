'use strict'

const quadratic = require('../quadratic')
const test      = require('tap').test


test('quadratic', function(t) {
  const maxDistance = 10

  t.equal(1.0, quadratic(0, maxDistance))
  t.equal(0.25, quadratic(2, maxDistance))
  t.equal(0.1111111111111111, quadratic(3, maxDistance))
  t.equal(0.01, quadratic(maxDistance, maxDistance))
  t.equal(0, quadratic(maxDistance+1, maxDistance))

  t.end()
})
