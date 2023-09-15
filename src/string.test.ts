// sum.test.js
import { expect, test } from 'vitest'
import { alter, slugify } from './string'

test('alter', () => {
    expect(alter(null, "--")).toBe("--")
})

test('slugify', () => {
    expect(slugify(["1 2 3", "4"])).toBe("1-2-3-4")
})