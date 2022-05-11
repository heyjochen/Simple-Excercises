/*

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"


*/

//P: string of words
//R: a string of words but words with more than five characters are reversed
//E: spinWords( "This is another test" )=> returns "This is rehtona test"
//P: split the string into an arr, the we map through all elements and if an element is longer than > 5 chars we reverse it, then return string joined

function spinWords(string){
    return string.split(' ').map((e => {
        return (e.length >= 5) ? e.split('').reverse().join('') : e
    })).join(' ')
  }