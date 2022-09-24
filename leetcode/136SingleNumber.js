/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1

*/


var singleNumber = function(nums) {
    let hash = {}
    for (let num of nums){
        if (num in hash){
            hash[num]++
        } else {
            hash[num] = 1
        }
    }
    
    for (let key in hash){
        if (hash[key] === 1) return key
    }
};