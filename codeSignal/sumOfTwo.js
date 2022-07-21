/*

You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

Example

For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
solution(a, b, v) = true.

*/

//Create hash table for one array then for another array look up for key that is complimentary number to reach target value.
//hash map is O(n), and key look up is O(1), so total is O(n)

function sumOfTwo(a, b, v) {
  const h = {};
  a.forEach((x) => (h[x] = 1));
  return b.some((n) => h[v - n]);
}
