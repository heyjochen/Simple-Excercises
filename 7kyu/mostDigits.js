/*

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/


//P: array
//R: return first number with most digits
//E: findLongest([8, 900, 500]), 900)
//P: reduce

const findLongest = l => l.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);


//l: array being passed to the function
//l.reduce(a,b): for each element in the array l perform the following function on each element and use the accumulator a to hold the result
//`${b}` : codegolf equivalent of a.toString()