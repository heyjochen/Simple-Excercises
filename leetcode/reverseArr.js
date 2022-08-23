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

const reverseString = (s) => {
  for (let [a, b] = [0, s.length - 1]; a < b; a++, b--) {
    [s[a], s[b]] = [s[b], s[a]];
  }
};

const reverseString2 = (s) => {
  reverse(0, s.length - 1);
};

function reverse(i, j) {
  if (i >= j) return;
  [s[i], s[j]] = [s[j], s[i]];
  reverse(i + 1, j - 1);
}
