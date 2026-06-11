// Problem 16: Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3
// Hint: Use Object.keys().length.



//===================problem solve 16================

//===return=> mardome vahirer function ke value janate hoi
const countProperties =(obj)=> {
// Object.keys(obj) object-এর সব key নিয়ে একটি array বানায়।
  return Object.keys(obj).length;
}

console.log(countProperties({a: 1, b: 2, c: 3}));
