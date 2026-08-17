/*==Problem 9: Capitalize First Letter of Each Word  [Easy]
Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
Example:
Input: 'hello world'  → Output: 'Hello World'
Hint: Use split(' '), map(), and join(' ')...
*/

//concept-1: map just array upor kaj kore 
//cocetp-2: খানে শুধু প্রতিটি Word-এর প্রথম Letter Capital হবে। বাকি অক্ষর আগের মতোই থাকবে।

const titleCase = (str) => {

    // String-কে Space অনুযায়ী Word-এর Array-তে ভাগ করছি
    const words = str.split(" ");

    // প্রতিটি Word-এর প্রথম Letter Capital করছি
    const result = words.map((word) => {

        // প্রথম Letter বড় করছি
        const firstLetter = word[0].toUpperCase();

        // প্রথম Letter বাদ দিয়ে বাকি অংশ নিচ্ছি
        const remainingLetters = word.slice(1);

        // প্রথম Letter + বাকি অংশ যোগ করছি
        return firstLetter + remainingLetters;
    });

    // Array-কে আবার String বানাচ্ছি
    return result.join(" ");
}

const  myString = "sabbir";
const reuslt = myString.toCharArray();




