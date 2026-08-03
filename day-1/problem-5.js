// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative' Input: 0   → Output: 'zero', input: 10 , Output Positive
// Hint: Use if-else if-else statements.

//===============Problem-5 solve=================

const checkSign = (n)=> {
    //n er man 0 teke small hobe nagative dekabe
    if(n < 0) {
        return "nagative";

    }else if(n === 0){
        return "zero"
    }else{
        return "positive"
    }
}

console.log(checkSign(-5))//negative
console.log(checkSign(0))//zero
console.log(checkSign(10))//positive