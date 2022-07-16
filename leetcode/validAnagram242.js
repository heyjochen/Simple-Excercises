/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

*/

// sort brute force
let isAnagram = function (s, t) {
  return (
    s
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("") ===
    t
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("")
  );
};

// hashmap
let isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false;

  let seenS = {},
    seenT = {};

  for (let i = 0; i < s.length; i++) {
    if (seenS[s[i]] !== undefined) seenS[s[i]] = seenS[s[i]] + 1;
    else seenS[s[i]] = 1;

    if (seenT[t[i]] !== undefined) seenT[t[i]] = seenT[t[i]] + 1;
    else seenT[t[i]] = 1;
  }

  for (let key in seenS) {
    if (seenS[key] !== seenT[key]) return false;
  }

  return true;
};
