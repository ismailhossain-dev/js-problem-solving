/*Problem 7: Count Vowels in a String  [Easy]
Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
Example:
Input: 'hello'   → Output: 2 Input: 'javascript' → Output: 3
Hint: Use a loop or match() with a regular expression.
*/

/*function countVowels(str) {
  // vowel-এর সংখ্যা রাখার জন্য variable
  let count = 0;

  // string-এর প্রতিটি character-এর উপর loop চালানো হচ্ছে
  for (let char of str) {

    // বর্তমান character vowel কিনা চেক করা হচ্ছে
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {

      // vowel হলে count 1 বাড়ানো হচ্ছে
      count++;
    }
  }

  // মোট vowel সংখ্যা return করা হচ্ছে
  return count;
}*/

// "hello" তে e এবং o আছে, তাই output 2
// console.log(countVowels("hello"));

// "javascript" তে a, a, i আছে, তাই output 3
// console.log(countVowels("javascript"));

//pracitce

const countVowels2 = (str2) => {
  let count = 0;

  //first loop ta 5 bar chole
  /**
   * h,
   * e,
   * l,
   * l,
   * 0
   */
  for (let chrt of str2) {
    if (
      chrt === "a" ||
      chrt === "e" ||
      chrt === "i" ||
      chrt === "o" ||
      chrt === "u"
    ) {
      count++;
    }
  }
  /**
     * h -> vowel না
    e -> vowel -> count = 1
    l -> vowel না
    l -> vowel না
    o -> vowel -> count = 2
     */

    // return 2; count return ditechi karon amra ordesso holo count return kora or cheek kora vowel

  return count;
};

console.log(countVowels2("hello")); //2 vowel e, 0
console.log(countVowels2("javascript")); //output3 a, a, i



//=======practice problem-7============

const countVowels3=(strrr) => {
    let count3 = 0; 
    for(let chello of strrr){
        if(
            chello === "a" ||
            chello === "e" ||
            chello === "i" ||
            chello === "o" ||
            chello === "u"

        ){
            count3++; 
        }
    }
    return count3;

}

console.log(countVowels3("eoious"));//e, o, i, o, u output 5
console.log(countVowels2("wowo"));//o, o, output 2

