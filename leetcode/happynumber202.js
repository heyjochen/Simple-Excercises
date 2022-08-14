/*

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:

Input: n = 2
Output: false



*/

// INput number n, return a boolean
// Will do a while loop while n is !=== 1, make the number a string, split it then square its digits

function isHappy(n) {
  const visit = new Set();

  while (!visit.has(n)) {
    visit.add(n);
    n = sumOfSquares(n);

    if (n == 1) return true;
  }

  return false;
}

function sumOfSquares(n) {
  let output = 0;

  while (n) {
    let digit = n % 10;
    digit = digit ** 2;
    output += digit;
    n = Math.floor(n / 10);
  }

  return output;
}
