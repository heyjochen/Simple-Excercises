/*

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

*/

//P: unsorted array with all numbers expect one from 0 to 100
//R: return missing number
//E:
//P: return sum of 0 to 100 - arr.reduce((acc, total) => acc + total, 0)

function missingNo(nums) {
  return (n * (n - 1)) / 2 - nums.reduce((acc, total) => acc + total, 0);
}
