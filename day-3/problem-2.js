/*Problem 12: Find Maximum Value in Array  [Easy]
Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
Example:
Input: [3, 1, 7, 2, 9]  → Output: 9
Hint: Loop through and track the largest value foun*/

//== ei problem ta sove korar jonno amr first 3 man nivo and compare korbo 3teke man konta boro and eta amra loop e rakbo

function findMax(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

console.log(findMax([3, 1, 7, 2, 9]));


//practice-problem 12 

