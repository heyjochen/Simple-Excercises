/*

Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

*/

//P: an array of  integers
//R: maximum product of adjacent numbers
//E: adjacentElementsProduct([1, 2, 3]); ==> return 6
//P: adjacent means arr[i] === arr[i+1], acc * cur > cur * arr[
    // calculate all the products
    // run through the array
    // when is a number adjacent and the max product?


function adjacentElementsProduct(array) {
    let newArr = []
    for(i=0; i < array.length-1; i++){
    newArr.push(array[i]*array[i+1])
    }  
    return Math.max(...newArr)
}