/*

Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.
 

Example 1:

Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
Example 2:

Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.

*/

var countKDifference = function(nums, k) {
    
    let hash = {};
    let count = 0;
    
    for(let i of nums){
        
        // add the (i) as a key with the number of (i) in the array as value;
        if(hash[i]){
            hash[i] = hash[i]+1;   
        }
        else{
            hash[i] = 1;   
        }
        
        // check if its in the hash and get the value;
        if(hash[i-k]){
            count += hash[i-k];   
        }
        if(hash[i+k]){
            count += hash[i+k];   
        }
    }
    
    return count;
};
