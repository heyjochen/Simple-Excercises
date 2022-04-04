/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

//P: number
//R: number
//E: 2112 -> 4224
//P: create variable stringnumber = num.toString(), number.split(''), create mapArr arr.map, arr.join, return +mapArr


function squareDigits(num){
    let stringNumber = num.toString().split('')
    let mapArr = stringNumber.map(x => x*x).join('')
    return +mapArr
  }