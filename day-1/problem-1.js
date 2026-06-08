// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

//=====================================================

//=============Problem-1 Solve==============

function swap(a, b) {
 a = a + b ; //5 + 10 =15
 b = a - b; //10-5 = 5 //output-1

 a= a - b ; //10-5 //output-5

 return {a , b}

}

console.log(swap(5, 10));

