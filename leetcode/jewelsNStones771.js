/*

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0


*/

var numJewelsInStones = function (jewels, stones) {
  // create a hashmap that stores a value of true for every jewel
  // loop through every stone and if it is in hashmap increase the count
  let count = 0;
  let hashmap = {};

  for (let jewel of jewels) {
    hashmap[jewel] = true;
  }

  for (let stone of stones) {
    if (hashmap[stone]) {
      count++;
    }
  }

  return count;
};

// or with two loops

const numJewelsInStones2 = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let char of jewels) {
      if (char === stones[i]) {
        count++;
      }
    }
  }
  return count;
};
