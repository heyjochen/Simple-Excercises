/* 
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

//loop through array
// create variable for first element
// if array element is smaller than variable assign array element to variable
// after loop return variable


function returnSmallest (arr) {
    let compareValue = arr[0]
    arr.forEach ( element => {
        if (element < compareValue) { 
            compareValue = element
            }
        }   
        )
        return compareValue
}

returnSmallest ([34, -345, -1, 100])


// using the Math.min function

function returnSmallest (arr) {
    return Math.min.apply(null, arr);
  }

returnSmallest ([34, -345, -1, 100])