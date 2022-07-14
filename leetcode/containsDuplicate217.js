/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

// could sort and compare nums[i] to nums[i+1]
let containsDuplicate = function (nums) {
  nums = nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] === nums[i]) return true;
  }
  return false;
};

// could use hashmap
let containsDuplicate2 = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      return true;
    } else obj[nums[i]] = nums[i];
  }
  return false;
};

// could create new Set and compare to length
let containsDuplicate3 = function (nums) {
  return new Set(nums).size !== nums.length;
};
