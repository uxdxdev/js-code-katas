"use strict";

/*
1. Create Cat constructor, requiring arguments for name and weight
2. Throw an error if name or weight not specified when invoking the constructor.
3. Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after the instance's properties have changed.
4. Must use Object.defineProperty

Example: 

garfield = new Cat('garfield', 25);
Cat.averageWeight(); // 25

felix = new Cat('felix', 15);
Cat.averageWeight();   // now 20

garfield.weight = 5;
garfield.weight // 5
Cat.averageWeight(); // now 10
*/

var Cat = function (name, weight) {
  if (!name || !weight) {
    throw Error("please provide name and weight");
  }
  this.name = name;
  this.currentWeight = weight;
  Cat.count += 1;
  Cat.totalWeight += weight;
};

// static values and methods directly off Cat.<value/method>
Cat.count = 0;
Cat.totalWeight = 0;
Cat.averageWeight = function () {
  return Cat.totalWeight / Cat.count;
};

// instance methods Cat.prototype.<value/method>
Object.defineProperty(Cat.prototype, "weight", {
  set(value) {
    Cat.totalWeight -= this.currentWeight;
    Cat.totalWeight += value;
    this.currentWeight = value;
  },
  get() {
    return this.currentWeight;
  }
});

var fluffy = new Cat("fluffy", 15);
var garfield = new Cat("garfield", 25);
garfield.weight = 5;

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
