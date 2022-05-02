/*
Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
*/

//P: (arguments as numbers)
//R: sum of all arguments
//E: sum(8, 2) // => 10
//P: we use the rest parameter syntax which turns a set of arguments into an array.

function sum(...arr) {
    return arr.reduce((total,element) => total + element,0)
}