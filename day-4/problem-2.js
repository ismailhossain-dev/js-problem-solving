// Problem 17: Merge Two Objects  [Easy]
// Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
// Example:
// Input: {a:1}, {b:2}  → Output: {a:1, b:2}
// Hint: Use the spread operator or Object.assign().

//===================problem solve 17================

//========2ta object ke ekta object e convert kora lagbe======

const mergeObjects =(obj1, obj2)=>{
    const result = {... obj1, ... obj2}
    return result;
}

console.log(mergeObjects({a:1}, {b:2}))//{ a: 1, b: 2 }