/*

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

const { parseValues } = require("css-selector-tokenizer");

//P: string
//R: number of distinct duplicates
//E: "indivisibility" -> 1 # 'i' occurs six times
//P: filter compare indexOf to lastIndexOf 

function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }

// indexOf finds first index of value and lastIndexOf finds last Index of value
// only filters elements that are duplicates but ignores the first elements but not the very last one.

0 !== 0 && 13 === 0

0 !== 13 && 13 === 13