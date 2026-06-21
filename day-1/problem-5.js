// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero', input: 10 , Output Positive
// Hint: Use if-else if-else statements.

//===============Problem-5 solve=================

const cheekSign = (n)=> {
    //cheek n ki 0 teke choto kina
    if(n < 0) {
        return "negative"
    }
    //cheek n teke 0 choto naki soman
    else if(n <=0){
        return "Zero"
    }
    //check n teke 10 boro naki soman
    else if(n>=10){
        return "positive"
    }
}

console.log(cheekSign(-5))//negative
console.log(cheekSign(0))//Zero
console.log(cheekSign(10))//positive


