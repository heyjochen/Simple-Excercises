/*

Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a soluion with a linear runtime complexity and use only constant extra space.

*/

var singleNumber = function (nums) {
  const hash = {};
  for (i in nums) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else if (hash[nums[i]] && hash[nums[i]] > 1) {
      delete hash[nums[i]];
    } else {
      hash[nums[i]]++;
    }
  }
  return Object.keys(hash)[0];
};
