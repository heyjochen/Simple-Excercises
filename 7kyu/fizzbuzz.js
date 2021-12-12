/*

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/

//P: number n 
//R: array containing numbers 1 to n, where n is the parametered value
//E: fizzbuzz(3) -->  [1, 2, "Fizz"]
//P: empty array, loop from 1 to n, conditional push

// Return an array
function fizzbuzz(n)
{
    let fizzBArray = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) fizzBArray.push('FizzBuzz')
        else if (i % 5 === 0) fizzBArray.push('Buzz')
        else if (i % 3 === 0) fizzBArray.push('Fizz')
        else fizzBArray.push(i)  
        }
        return fizzBArray
    }


const fizzbuzz = (n) => 
    Array.from({length: n}, (_,i)=> i+1)
    .map( el => el % 15 === 0 ? 'FizzBuzz' : el % 3 === 0 ? 'Fizz' : el % 5 === 0 ? 'Buzz' : el )
fizzbuzz(8)