/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/


// iterative
var reverseString = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};


// recursive
const reverseString2 = (s) => {
  reverse(0, s.length - 1);
};

function reverse(i, j) {
  if (i >= j) return;
  [s[i], s[j]] = [s[j], s[i]];
  reverse(i + 1, j - 1);
}
