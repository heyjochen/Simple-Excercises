// Write a function that calculates the sum of all elements inside two arrays
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a,b) => a + b,0)
    }