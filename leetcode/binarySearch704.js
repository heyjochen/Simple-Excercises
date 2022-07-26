/*

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

 

Constraints:

    1 <= nums.length <= 104
    -104 < nums[i], target < 104
    All the integers in nums are unique.
    nums is sorted in ascending order.


*/
// using binary search we define a left starting point and an end point, we need to know if arr length is even or uneven, we then define a middle, then we have a while loop (while left < right or right > left) and define if we look at the left or the right,

// if our target is smaller then the left : middle will be the new end point,
// if our target is biggher than the left : middle will be the new start point

// if our target is smaller than the right : middle will be the new start point
// if our target is bigger than the right : middle will be the new end point

// lastly when nums[lo] === target return lo otherwise we return -1

const search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = low + Math.floor((high - low + 1) / 2); // in case of very big numbers
    if (target < nums[mid]) {
      // if target is to the left
      high = mid - 1;
    } else {
      low = mid; // if it is to the right
    }
  }
  return nums[low] === target ? low : -1;
};
let nums = [-1, 0, 3, 5, 9, 12],
  target = 9;

  search(nums, target)