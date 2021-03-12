"use strict";
/*
Create a function `sayHello` which takes a string as parameter and returns: "Hello {first name}", where {first name} is replaced with the argument value, example:
* sayHello("Barbara") -> "Hello Barbara"

If the argument is empty or null, return "Hello World":
* sayHello(null) -> "Hello World"

*/

// TODO your code:
function sayHello(name) {
  if (!name) return "Hello World";
  return "Hello " + name;
}

// Begin of tests
const assert = require("assert");

test("hello", () => {
  assert.strictEqual(typeof sayHello, "function");
  assert.strictEqual(sayHello.length, 1);
  assert.strictEqual(sayHello("Barbara"), "Hello Barbara");
  assert.strictEqual(sayHello("Jean-Michel"), "Hello Jean-Michel");
  assert.strictEqual(sayHello(""), "Hello World");
  assert.strictEqual(sayHello(null), "Hello World");
});
// End of tests
