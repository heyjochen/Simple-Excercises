/*

Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

Examples

[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0

*/

//P: array of numbers
//R: sum of even numbers
//E: [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
//P: could filter and create a new array that will be reduced,

function sumEvenNumbers(input) {
    const evens = input.filter(e => e % 2 === 0)
    return evens.reduce((a,b) => a + b, 0)
}


//This can be shortened using an arrow function and combining filter in the reduce

const sumEvenNumbers = (input) => input.reduce((acc, cur) => cur % 2 === 0 ? cur + acc : acc, 0);