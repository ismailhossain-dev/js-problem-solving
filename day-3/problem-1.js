/*Problem 11: Find the Sum of an Array  [Easy]
Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
Example:
Input: [1, 2, 3, 4, 5]  → Output: 15
Hint: Use reduce() or a for loop.*/

//======================problem solve 11======================

//----The reduce() method is used to calculate the total value of all elements in an array. & use string convert to array

//----------reduice take 2 argument-----------------

const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(total);//output 15