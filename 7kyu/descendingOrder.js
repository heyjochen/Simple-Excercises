/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

//P: number 
//R: number ordered by highest value
//E:42145 --> 54421
//P: number.toString().split('') gives us an array, then sort that array, then join to string, then to number
function descendingOrder(n){
    const arrToSort = n.toString().split('').sort((a,b) => b - a)
    return Number(arrToSort.join(''))
    }