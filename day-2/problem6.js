/*Problem 6: Reverse a String  [Easy]
Description: Write a function reverseString(str) that returns the reverse of a given string.
Example:
Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
Hint: Use split(''), reverse(), and join('').
*/


const reverseString = (str)=> {
   return str.split("").reverse().join("")
    // return result
}
console.log(reverseString("hello"));//output olleh

//method-2 

const reverseString2 = "hello"
const result = reverseString2.split("").reverse().join(" ");

console.log (result)//output o l l e h