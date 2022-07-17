/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:
`
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/

// using regex we can just filter the string without alphanumeric chars

let isPalindrome1 = function (s) {
  let regEx = /[^a-zA-Z0-9]+/g;
  let firstStr = s.replace(regEx, '').toLowerCase();
  return firstStr.split('').reverse().join('') === firstStr;
};

isPalindrome('A man, a plan, a canal: Panama');

// Using a while loop and comparing the left char to the right char and using the ASCII codes
// Build a helper function to determine if char is alphanumerical

// 0-9 is 48 to 57
// A-Z is 65 to 90
// a-z is 97 to 122

const isAlphanumeric = (char) => {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  } else {
    return true;
  }
};

const isPalindrome = (s) => {
  // Declare first and last char positions
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // if a char is not alpha-numeric skip that character
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    while (right > left && !isAlphanumeric(s[right])) {
      right--;
    }

    // If chars not the same, breakout, otherwise move to next character and redo while loop
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
};

isPalindrome('A man, a plan, a canal: Panama');
