"use strict";
/*
Create a function `reverse`, which given a number, 
return the reverse of the number while keeping the sign.

You can assume that all values are numbers.

Example:
* 12345 -> 54321
* -12345 -> -54321
* 12.345 -> 543.21
* -123.45 -> -54.321

Don't mutate the parameter.

*/

// TODO your code:
function reverse(num) {}

// Begin of tests
const assert = require("assert");

test("inverse array", () => {
  assert.strictEqual(typeof reverse, "function");
  assert.strictEqual(reverse.length, 1);
  assert.deepStrictEqual(reverse(0), 0);
  assert.deepStrictEqual(reverse(1), 1);
  assert.deepStrictEqual(reverse(-1), -1);
  assert.deepStrictEqual(reverse(12345), 54321);
  assert.deepStrictEqual(reverse(-12345), -54321);
  assert.deepStrictEqual(reverse(12.345), 543.21);
  assert.deepStrictEqual(reverse(-12.345), -543.21);

  // check parameter mutating
  let arg = [1];
  let notUsed = reverse(arg);
  assert.deepStrictEqual(arg, [1]);
});
// End of tests
