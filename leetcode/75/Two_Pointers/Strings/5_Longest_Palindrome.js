// Define a function to find the longest palindromic substring in a given string.
var longestPalindrome = function (s) {
  let longest = ""; // Initialize a variable to store the longest palindrome.

  // Loop through each character in the input string 's'.
  for (let i = 0; i < s.length; i++) {
    // Check for palindromes with 'i' as the center (odd-length palindromes).
    expandCheck(i, i);
    // Check for palindromes with 'i' and 'i+1' as centers (even-length palindromes).
    expandCheck(i, i + 1);
  }

  // Define a nested function to expand and check for palindromes around a center.
  function expandCheck(l, r) {
    // Continue expanding outwards while the characters at 'l' and 'r' are equal,
    // and 'l' and 'r' are within the bounds of the string.
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      // If the current palindrome is longer than the longest found so far,
      // update the 'longest' variable to store the current palindrome.
      if (r - l + 1 > longest.length) {
        longest = s.slice(l, r + 1);
      }
      l--; // Move the left pointer to the left.
      r++; // Move the right pointer to the right.
    }
  }

  // Return the 'longest' variable, which contains the longest palindromic substring.
  return longest;
};
