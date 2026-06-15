/**
 * Problem 33: Deep Clone an Object  [Medium]
Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
Example:
const a = {x: {y: 1}};const b = deepClone(a);b.x.y = 99;// a.x.y is still 1
Hint: Use recursion and check for object/array types.
 */