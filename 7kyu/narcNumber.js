/*

A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where n = 3 (number of digits in 153)
13 + 53 + 33 = 153

Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.

*/

function isNarcissistic(n){
  
    const length = n.toString().length
    const arr = n.toString().split('')
    const reduce = arr.reduce((a,b) => a + Math.pow(b,length),0)
    return (n === reduce)
  }
 
  
  //Or Oneliner
  const narcNumber = n => {
    return n === n.toString().split('').reduce((res, num, index, arr) => res += Math.pow(num, arr.length), 0)
  }