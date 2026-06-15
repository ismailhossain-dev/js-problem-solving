/**
 * Problem 33: Deep Clone an Object  [Medium]
Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
Example:
const a = {x: {y: 1}};const b = deepClone(a);b.x.y = 99;// a.x.y is still 1
Hint: Use recursion and check for object/array types.
 */

// function deepClone(obj) {
    
// }

// const a = 
// {x: {y: 1}
// }
//man ta b te convert korbo 

// const b = a;

// console.log(b) //full object ta deka jaitese

//upore object access korbo 
//console.log(b.x.y);//output 1


//============problem solve -33 ===============

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }

    return clone;
}

const a = {
    x: {
        y: 1
    }
};

const b = deepClone(a);

console.log(b);//output 1