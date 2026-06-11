/*Problem 15: Chunk an Array  [Medium]
Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
Example:
Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
Hint: Use a while loop with slice().*/

//slice kore kore vab korte hoyche
function chunkArray(arr, size) {
  const result = [];
  let index = 0;

  while (index < arr.length) {
    result.push(arr.slice(index, index + size));
    index += size;
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));//output [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]