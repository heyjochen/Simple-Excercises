/*

Write a function that returns the number of occurrences of an element in an array.

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;

*/

//P: array of numbers
//R: number of occ of a number
//E; arr.numberOfOccurrences(2) === 2;
//P: arr.filter(n).length

const numberOfOccurrences = (n) => {  
    return [4,2,2].filter(e => e===n).length

}
numberOfOccurrences(2)

