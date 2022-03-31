/*

Find numbers which are divisible by given number

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

Parameters, Return(what does it want returned), Example (give at least 3), Pseudo code then ill get back to you...

*/



//P: arr, number
//R all numbers which are divisible by the given divisor (number)
//E: ([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

//P:

// for.Each with a conditon e % number === 0
// arr.push e



///With forEach and push
function divisibleBy (numbers, divisor) {
    let allNumbers = []
    arr.forEach (e => {
        if (e % divisor === 0) {
            allNumbers.push(e)
        }
    })
    return allNumbers
}
divisibleBy([1, 2, 3, 4, 5, 6], 2)

//With filter
function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
  }