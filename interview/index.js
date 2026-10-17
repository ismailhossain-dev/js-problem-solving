//Problem-1 Reverse a String

const reverseString = (str)=> {
  return str.split("").reverse().join("");
}

// const result = reverseString("hello");
// console.log(result)


//Problem-2 Find the latest number 

const findLatest = (arr)=> {
  let latest = arr[0];

  for(let i = 1 ; i <arr.length ; i++) {
    if(arr[i] > latest) {
      latest = arr[i]
    }
  }

  return latest;
}

//console.log(findLatest([20, 30, 389, 38]))


//Problem-3 Check Palindrome

const isPalindrome =(str)=> {
  const palid = str.split("").reverse().join("");

  return str === palid;
  
}

// console.log(isPalindrome("madam"))
// console.log(isPalindrome("hello"))


//Problem-4: Remove Duplicates from Array 

const removeDublicate =(arr)=> {
  return [... new Set(arr)]
}

//console.log(removeDublicate([1, 1, 1, 2, 2, 3, 3, 4]))


//Problem-5: Count Vowels

const countVowels = (str) => {
  let count = 0;
  let vowels = "aeiou";

  for(let chart of str.toLowerCase()) {
    if(vowels.includes(chart)) {
      count ++
    }
  }

  return count;
}

// console.log(countVowels("javascript"))


//Problem -6  Count Character Frequency
//