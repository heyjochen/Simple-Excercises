/*

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:

Input: nums = [1,2,3]
Output: 0

*/

// What matters is to record how many pairs are below each number in nums

// We create a hashmap that records each unique number, but whenever we find a pair increases that number count

var numIdenticalPairs = function (nums) {
  const map = {};
  let count = 0;

  for (const number of nums) {
    if (map[number]) {
      // add the amount of pairs that can be built to count
      count += map[number];
      // increase the pair counter
      map[number] += 1;
    } else {
      map[number] = 1;
    }
  }
  return count;
};
