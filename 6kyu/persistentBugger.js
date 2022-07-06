/*

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

*/

//P: number
//R: number of times you multiply digits until reach length === 1
//E: 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//P: recursive with base case of length === 1, num.split, num.forEach *=, call recursive

function persistence(num, a) {
  a = a === undefined ? 0 : a;
  return num.toString().length == 1
    ? a
    : persistence(
        num
          .toString()
          .split("")
          .reduce((x, y) => +x * +y),
        a + 1
      );
}
