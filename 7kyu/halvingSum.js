/*

Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47

*/

//P: number
//R: calculate sum of halved element
//E: 25  =>  25 + 12 + 6 + 3 + 1 = 47
//P: create variable sum, while loop num > 1, sum += Math.floor(n/2)
function halvingSum(n) {
    let sum = 0
    while (n > 0) {
        sum += n
        n = Math.floor(n / 2)
    }
    return sum
}
