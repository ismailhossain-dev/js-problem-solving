/*Problem 10: Count Occurrences of a Character  [Easy]
Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
Example:
Input: 'banana', 'a'  → Output: 3
Hint: Use split(char).length - 1 or a loop.....

*/

function countChar(str, char) {
  let count = 0;

  /**
   * i = 0 কেন?
   * কারণ JavaScript-এ string-এর index 0 থেকে শুরু হয়।
   */
  for (let i = 0; i < str.length; i++) {
    // [i] mane holo banana
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

//console.log(countChar("banana", "a"));//output-3

