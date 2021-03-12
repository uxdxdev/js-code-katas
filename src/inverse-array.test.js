"use strict";
/*
Create a function `inverse`, which given an array of numbers, 
return the additive inverse of each : 
each positive becomes negatives, and the negatives become positives.

You can assume that all values are numbers.

If the argument is an empty array or null, return an empty array.

Example:
* [1, 2, 3, 4, 5] -> [-1, -2, -3, -4, -5]
* [1, -2, 3, -4, 5] -> [-1, 2, -3, 4, -5]
* [] -> []

Don't mutate the parameter.

*/

// TODO your code:
function inverse(array) {}

// Begin of tests
const assert = require("assert");

test("inverse array", () => {
  assert.strictEqual(typeof inverse, "function");
  assert.strictEqual(inverse.length, 1);
  assert.deepStrictEqual(inverse([]), []);
  assert.deepStrictEqual(inverse(null), []);
  assert.deepStrictEqual(inverse([0]), [-0]);
  assert.deepStrictEqual(inverse([1]), [-1]);
  assert.deepStrictEqual(inverse([-1]), [1]);
  assert.deepStrictEqual(inverse([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
  assert.deepStrictEqual(inverse([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
  // check parameter mutating
  let arg = [1];
  let notUsed = inverse(arg);
  assert.deepStrictEqual(arg, [1]);
});
// End of tests
