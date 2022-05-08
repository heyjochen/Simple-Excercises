/*

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"

*/

//P: string made of digits
//R: string where each digit is repeated a number of times equals to its value
//E: explode("102269") should return : "12222666666999999999"
//P: string.split, then map, then join

const explode = s => s.split('').map(e => e.repeat(e)).join('')