/*

You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

 

Example 1:

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.



*/
var sortPeople = function (names, heights) {
  let res = [];
  for (let i = 0; i < names.length; i++) {
    res.push([names[i], heights[i]]);
  }
  return res.sort((a, b) => b[1] - a[1]).map((item) => item[0]);
};
