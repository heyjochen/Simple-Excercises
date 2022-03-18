/* 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

let arrayTotalNumbers = [1,-4,7,12]

// create a function with an empty array
// run a forEach on every element that checks for conditon element > 0
// if true push into empty array
// else sum = 0
// return sum of arr[i]

function returnSumOfPositives (arr) {
    let sumArray = []
    let sum = 0
    arr.forEach ((element) => {
        if (element > 0) {
        sumArray.push(element)
        } else if (arr.length === 0) {
            sum = 0
        }
    }) 
    sumArray.forEach ((element) => {
        
        sum += element
    })
    return sum
}
returnSumOfPositives (arrayTotalNumbers)

// even shorter

function returnSumOfPositives(arr) {
    let sum = 0;
    arr.forEach((element) => {
        if (element > 0) {sum += element}
    });
    return sum;
}

returnSumOfPositives([1, 3, 5])