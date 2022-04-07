/*

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.


*/

//P: string
//R: mumbled string, which repeats every element by it index number
//E: accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//P: make an array out of the string, then map through it, for every arr element we return the element.toUpperCase() and add the element.repeat(i).toLowerCase(), then we join the array by '-'

function accum(s) {
        return s.split('').map((e, i) => (e.toUpperCase() + e.toLowerCase().repeat(i))).join('-');
  }