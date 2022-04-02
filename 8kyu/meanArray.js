/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

function averageArr (arr) {
    let sum = 0
    for (let grade of arr) {
       sum += grade
    } 
    return Math.floor (sum / arr.length)
}

averageArr([1,4,3,1])

// we could also use the reduce method to write less code
function averageArr(arr){
    return Math.floor(arr.reduce((sum, x) => sum + x) / arr.length);
  }

averageArr([1,4,3,1])