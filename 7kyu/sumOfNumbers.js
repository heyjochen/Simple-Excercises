/*

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

*/

//P: two integers a and b
//R: sum of the integers between
//E: (0, 1) --> 1 (0 + 1 = 1)
//P: if a=b return a, else we sort the arr and then start a loop that sums up the values

function getSum(...arr) {
    const sortedNumbers = arr.sort((a,b) => a - b)
    let sum = 0
    if (sortedNumbers[0] === sortedNumbers[1]) { return sortedNumbers[0] } 
    else {
    for (let i=sortedNumbers[0]; i <= sortedNumbers[1]; i++){
        sum += i
        }
    return sum 
    }
}


// We can use an arithmetic series where n * a + b divided by two is the sum
// We need to declare a variable for min and max
// max - min + 1 gives us n

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }