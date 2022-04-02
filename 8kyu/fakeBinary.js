/*

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/

function fakeBin(x){
    // create array out of string
    // forEach with push into empty array
    // arr to string
      
    const arrFrX = x.split('')
    const empty = []
    const binaryArr = arrFrX.forEach (e => {
      if (e < 5) { 
      empty.push(0)
    } else {empty.push(1)}
    })
    return empty.join('')
    }