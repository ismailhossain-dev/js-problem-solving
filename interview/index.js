//============problem-1 Reverse a String===========
/**
 * split("") String-কে Array বানায়
 * reverse() Array উল্টায়
 * join("") আবার String বানায়
 */
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

//console.log(reverseString("hello"))

//============problem-2 Find the Largest Numbe===========

const findLargest = (arr) => {
  let latest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > latest) {
      latest = arr[i];
    }
  }
  return latest;
};

//console.log(findLargest([30, 40, 80, 10]))

//============= Check Palindrome Problem-3: =======
//Problem: একটি String সামনে থেকে এবং পেছন থেকে একই কি না Check করো

const isPalindrome = (str) => {
    const reversed = str.split("").reverse().join("");

    return str === reversed;
};

//console.log(isPalindrome("madam")); //false
//console.log(isPalindrome("hello")); //true


//=======Remove Duplicates from Array Problem:4================

const removeDublicate = (arr)=> {
   return [...new Set(arr)]

    
}
//console.log(removeDublicate([1, 2, 2, 3, 4, 4, 5]))


//===========Count Vowels in a String Problem:5==============

const countVowels = (str)=> {
    const Vowels = "aeiou";

    for(let i = 1 ; i<str.length ; i++){
        
    }
}

console.log(countVowels("javascript"))