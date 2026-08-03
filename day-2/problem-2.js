/*Problem 7: Count Vowels in a String  [Easy]
Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
Example:
Input: 'hello'   → Output: 2 Input: 'javascript' → Output: 3
Hint: Use a loop or match() with a regular expression.
*/

//loop er mardome programatically cheek kore output ta bahir korbo 


const countVowels = (str) => {
    // Vowel-এর সংখ্যা গণনা করার জন্য
    let count = 0;

    // String-এর প্রতিটি Character Loop করে দেখছি
    for (let i = 0; i < str.length; i++) {

        // বর্তমান Character (str[i]) vowel কি না চেক করছি
        if (
            str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u"
        ) {
            // যদি vowel হয় তাহলে count ১ বাড়বে
            count++;
        }
    }

    // Loop শেষ হলে মোট vowel-এর সংখ্যা return করছি
    return count;
}

console.log(countVowels("hello"));       // 2
console.log(countVowels("javascript"));  // 3
console.log(countVowels("apple"));       // 2


//practice loop 50 count

// let loo = 50;

// for (let b = 0; b < loo; b++) {
//     console.log("Loop is running:", b + 1);
// }
