/*Problem 8: Check Palindrome  [Easy]
Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
Example:
Input: 'racecar'  → Output: true Input: 'hello'    → Output: false
Hint: Compare the string to its reverse...
*/

//============problem solve -8 ==========


function isPalindrome(str) {
  const reverse = str.split("").reverse().join("");

  return str === reverse;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false