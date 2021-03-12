"use strict";

/*
1. Create Cat constructor, requiring arguments for name and weight
2. Throw an error if name or weight not specified when invoking the constructor.
3. Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after the instance's properties have changed.
4. Must use Object.defineProperty

Example: 

garfield = new Cat('garfield', 25);
Cat.averageWeight(); // 25

fluffy = new Cat('fluffy', 15);
Cat.averageWeight();   // now 20

garfield.weight = 5;
garfield.weight // 5
Cat.averageWeight(); // now 10
*/

var Cat = function (name, weight) {};

// Begin of tests
const assert = require("assert");

test("prototype inheritance", () => {
  assert.strictEqual(typeof Cat, "function");
  assert.strictEqual(Cat.length, 2);
  assert.strictEqual(fluffy.weight, 15);
  assert.strictEqual(fluffy instanceof Cat, true);
  assert.strictEqual(fluffy.averageWeight, undefined);
  assert.strictEqual(typeof Cat.averageWeight, "function");
  assert.strictEqual(Cat.averageWeight(), 10);
  assert.ok(Object.getOwnPropertyDescriptor(Cat.prototype, "weight").get);
});
