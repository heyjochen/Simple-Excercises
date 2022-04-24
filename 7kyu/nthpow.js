/*

You are provided with an array of positive integers and an additional integer n (n > 1).

Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

Examples
{1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
{1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30

*/

//P: array of numbers and an integer n
//R: sum of each value in the arr to nth power minus sum of original arr
//E: {1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30
//P; return a.reduce((a,b)=> Math.pow(a,n) + Math.pow(b,n)),0 - a.reduce((a,b) => a+b,0)


function modifiedSum(a, n) {
    let powArr = a.map(e => Math.pow(e,n))
    let sumOfPowArr = powArr.reduce((a,b) => a+b,0);
    let sumOfArr = a.reduce((a,b) => a+b,0)
    return sumOfPowArr - sumOfArr
  }

  modifiedSum([1, 2, 3], 3)


  const modifiedSum = (arr, exp) => 
  arr.reduce((a, b) => a + Math.pow(b, exp) - b, 0);
  modifiedSum([1, 2, 3], 3)
