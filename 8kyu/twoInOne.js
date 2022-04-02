/*

You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
Happy coding!

*/

// Let's do it COMPLICATED

// use concat to concatenate both arrays
// create empty array and run forEach on every e, check if e is not in empty arr and then push it into there

function mergeArrays(arr1, arr2) {
    const arr3 = arr1.concat(arr2)
    let newArray = []
    arr3.forEach (e => {
        if (!(newArray.includes(e))) {
            newArray.push(e)
        }
    })
    return newArray.sort((a,b) => a-b)
  }
mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])

// Let's do it FAST using spread

function mergeArrays(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))].sort((a,b)=>a-b)
  }

// Let's do it FAST using new Set

function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
  }