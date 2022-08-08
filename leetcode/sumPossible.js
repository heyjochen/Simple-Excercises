/*

Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

You may assume that the target amount is non-negative.
test_00:

sumPossible(8, [5, 12, 4]); // -> true, 4 + 4


*/

/* Think about it as a tree with the amount being the parent and the numbers being subtracted to get the child nodes

                                    8
                                3  -4   4                               
                            false  false    -1 -8 0 (true)

                        
This gives us our base cases:
- If amount < 0 return false
- If amount = 0 return true
- Also memo, if num in memo return memo[num]


Then iterate over the numbers array and subtract amount - num, take in numbers itself and memo

then have if case
if (sumPossible(amount - num, numbers, memo) {
    memo[num] = true
    return true
}
    memo[num] = false
    return false




*/

const sumPossible = (amount, numbers, memo = {}) => {
  if (amount === 0) return true;

  if (amount < 0) return false;

  if (amount in memo) return memo[amount];

  for (let n of numbers) {
    if (sumPossible(amount - n, numbers, memo)) {
      memo[amount] = true;
      return true;
    }
  }
  memo[amount] = false;
  return false;
};
