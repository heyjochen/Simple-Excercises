/*

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

function squareSum(numbers){
    // map to square every number in a new array
    const squared = numbers.map(e => e*e)
    // reduce new array to get sum
    return squared.reduce((previous, next) => previous + next,0)    
}


// We can simplify that without creating a new array by using a function within reduce

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }