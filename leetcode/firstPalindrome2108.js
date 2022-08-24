/*

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

 

Example 1:

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.


*/
// function to check if string is palindrome
let isPalindrome = (str) => {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
};

//find first palindrome in array

function firstPalindrome(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      return arr[i];
    }
  }
  return '';
}
