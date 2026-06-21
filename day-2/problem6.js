/*Problem 6: Reverse a String  [Easy]
Description: Write a function reverseString(str) that returns the reverse of a given string.
Example:
Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
Hint: Use split(''), reverse(), and join('').
*/

//====================problem solve 6====================

/**
 * 1.split("")=> kaj kore string teke array te convert korar jonno like
 * const str = "hello";
    console.log(str.split(''));
 * ['h', 'e', 'l', 'l', 'o']//output

    2.why use split => reverse() method শুধুমাত্র Array-এর উপর কাজ করে

    3.reverse()=> Array-এর element গুলো উল্টে দেয়।

    4.join("")=> Array-এর element গুলোকে একসাথে জোড়া লাগিয়ে String বানায়। 
    like "olleh"
 */

const reverseString=(str)=>{
    return str.split('').reverse().join('')
}

console.log(reverseString("hello"));//olleh


