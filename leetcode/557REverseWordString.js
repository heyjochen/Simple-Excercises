/*

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:

Input: s = "God Ding"
Output: "doG gniD"

*/

var reverseWords = function (s) {
  s = s.split(' ');
  for (let word of s) {
    let characters = word.split('');
    let l = 0;
    let r = characters.length - 1;
    while (l < r) {
      let temp = characters[l];
      characters[l] = characters[r];
      characters[r] = temp;
      l++;
      r--;
    }
    word = characters.join('');
  }
  return s.join(' ');
};
