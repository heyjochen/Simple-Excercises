/*

Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.

Return true if these subarrays exist, and false otherwise.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [4,2,4]
Output: true
Explanation: The subarrays with elements [4,2] and [2,4] have the same sum of 6.

Example 2:

Input: nums = [1,2,3,4,5]
Output: false
Explanation: No two subarrays of size 2 have the same sum.

*/

var findSubarrays = function (nums) {
  // two pointer with loop
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let left = nums[i];
    let right = nums[i + 1];
    if (left + right in hash) {
      return true;
    }
    hash[left + right] = true;
  }
  return false;
};
