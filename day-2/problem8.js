/*Problem 8: Check Palindrome  [Easy]
Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
Example:
Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
Hint: Compare the string to its reverse.
*/

//============problem solve -8 ==========

function isPalindrome(str) {

  // string-টাকে character array-তে convert করা হচ্ছে
  const reversed = str.split("")

    // array-র elements উল্টে দেওয়া হচ্ছে
    .reverse()

    // আবার array থেকে string বানানো হচ্ছে
    .join("");

  // original string এবং reversed string একই কিনা compare করা হচ্ছে..
  return str === reversed;
}

// "racecar" সামনে থেকে ও পিছন থেকে একই, তাই true return করবে
console.log(isPalindrome("racecar")); // true

// "hello" উল্টালে "olleh" হয়, তাই false return করবে
console.log(isPalindrome("hello"));   // false