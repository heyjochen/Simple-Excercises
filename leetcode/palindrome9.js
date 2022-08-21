/* 

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.

    */

function isPalindrome(num) {
  if (num < 0) return false;
  let rev = 0;
  let n = num;
  while (n) {
    let last = n % 10;
    rev = rev * 10 + last;
    n = Math.floor(n / 10);
  }
  return rev === num;
}
