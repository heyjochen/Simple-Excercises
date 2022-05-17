/*

Task
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string

*/

//P: str
//R: string reversed but only letters
//E: str = "ultr53o?n", the output should be "nortlu".
//P: split, forEach, filter if( char.toUpperCase() != char.toLowerCase() ) , reverse, join

function reverseLetter(str) {

    return str.split('').filter(e => e.toUpperCase() !== e.toLowerCase()).reverse().join('')
}