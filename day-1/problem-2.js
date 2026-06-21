// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: true Input: 7  → Output: false
// Hint: Use the modulus (%) operator.


//===============Problem-2 solve=================

//method-1 

const isEven = (n)=> {
    // return n /2; 
    return n % 2 === 0;
}

// console.log(isEven(4))//true
// console.log(isEven(7))//false

//method -2 

const isEnve2 = (a) => {
    if(a % 2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEnve2(8));//true
console.log(isEnve2( 3));//false