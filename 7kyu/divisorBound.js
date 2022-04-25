/*

Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

maxMultiple (10,50)  ==> return (50)
Explanation:
(50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

maxMultiple (37,200) ==> return (185)
Explanation:
(185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .



*/

//P:Two numbers, a divisor and a bound
//R: Find the largest integer N , Such That, N is divisible by divisor, N is less than or equal to bound, N is greater than 0.
//E: (37,200) ==> return (185)
//P: make an arr from divisor to bound, filter with conditions, return Math.max

const maxMultiple = (divisor, bound) => { 
    let arr = []
    for (let i = 1; i <= bound; i++){
        if (i % divisor === 0 ){
          arr.push(i)
        }
    }
    return Math.max(...arr)
}
//or
function maxMultiple(divisor, bound){
    return bound-bound%divisor
  }

Example (2,7) -> 7%2 = 1; 7/2 = 3.5 in other words 7 contains whole number 2 three times which is 6 in total. Does it make sense?