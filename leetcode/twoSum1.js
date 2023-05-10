/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

// We can bruteforce through arr and compare each value
let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; i < nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// value, index
// Or we create a hashmap with a base case, see if

//nums = [2,7,11,15], target = 9
let twoSum2 = (nums, target) => {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hash) {
      return [i, hash[target - nums[i]]];
    }
    hash[nums[i]] = i;
  }
};
