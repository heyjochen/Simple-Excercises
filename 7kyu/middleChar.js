/*

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

*/

//P: string 
//R: middle character if words length is odd, if even the middle 2 characters, if one character return character
//E:Kata.getMiddle("middle") should return "dd"
//P: get middle by using length on the string and dividing by 2
//P: ternary operation. s.length % 2 then s.charAt(floor of middle)
//P: else s.slice(middle-1, middle + 1)


function getMiddle(s){
    let middle = s.length / 2;
    return (s.length % 2) // becomes true for an odd value as s.length % 2 is only 0 for even strings
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
}
getMiddle('middl')