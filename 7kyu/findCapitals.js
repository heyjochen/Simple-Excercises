/*

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/

//P: string of word
//R: array with index of Capital chars
//E: Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
//P: split the word, forEach with conditional and push into empty arr, return arr

const capitals = (word) => {
    const upperCaseIndexes = []
    word.split('').forEach((e,i) => {
        if (e === e.toUpperCase()) {
            upperCaseIndexes.push(i)
        }
    })
    return upperCaseIndexes

};