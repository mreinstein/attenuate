import { linear } from '../index.js'
import { test } from 'tap'


test('linear', function (t) {
    const maxDistance = 1000
    t.equal(1.0, linear(0, maxDistance))
    t.equal(0.9, linear(100, maxDistance))
    t.equal(0.5, linear(500, maxDistance))
    t.equal(0.0, linear(1000, maxDistance))
    t.equal(0.0, linear(1001, maxDistance))
    t.end()
})
