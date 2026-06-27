/*==Problem 9: Capitalize First Letter of Each Word  [Easy]
Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
Example:
Input: 'hello world'  → Output: 'Hello World'
Hint: Use split(' '), map(), and join(' ')...
*/


function titleCase(str) {
    return str
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

//console.log(titleCase("hello world"));


/**
 * slice(1) ব্যবহার করা হয় একটি string-এর নির্দিষ্ট index থেকে শেষ পর্যন্ত অংশ নেওয়ার জন্য। eta bisically inder er motho kaj kore first word ta dorche
 * output
 * what is slice 
 * ello
 * 
 */

const titleCase2 = (strr) => {
    return strr
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(titleCase2("hello sabbir"));

const titleCase3 = (strr) => {
    return strr
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(titleCase3("hello sabbir"));//output Hello Sabbir