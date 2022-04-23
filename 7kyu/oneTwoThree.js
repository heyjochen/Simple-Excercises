/*

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]


*/

//P: array with a list of strings
//R: same but every element has index number before it
//E: number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
//P: first check if array is empty, then forEach and map

let number = (array) => {
    const changedArr = array.map((e,i) => `${i+1}: ${e}`)
    return changedArr
}