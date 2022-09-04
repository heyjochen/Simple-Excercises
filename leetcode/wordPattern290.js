/*

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false



*/

var wordPattern = function (pattern, s) {
  let hash1 = {};
  let hash2 = {};
  s = s.split(' ');

  if (pattern.length !== s.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!([pattern[i]] in hash1) && !(s[i] in hash2)) {
      hash1[pattern[i]] = s[i];
      hash2[s[i]] = true;
    } else {
      if (hash1[pattern[i]] !== s[i]) return false;
    }
  }
  return true;
};

wordPattern('aaaa', 'dog cat cat dog');
