// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10 Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

//=====================================================

//=============Problem-1 Solve==============
//a er output 10 and b er ouput 5 korte hobe

const swap = (a, b) => {
    // এটাই মূল swap করার লাইন।
    [a, b] = [b, a];
    return {a, b}
}

console.log(swap(5, 10));//output 10 then 5