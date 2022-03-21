/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
*/

// function that has arr as parameter
// if arr == null return 0 
// else loop through it and return sum

function returnSum (arr) {
    let sum = 0
    if (arr == 0) {
        return 0
    } else for (let element of arr) {
        sum += element
    }
    return sum
}

returnSum([1, 5.2, 4, 0, -1])

// again we could use the reduce function
function returnSum (arr) {
return arr.reduce((a, b) => a + b, 0);
}