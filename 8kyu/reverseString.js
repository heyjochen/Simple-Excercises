// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Pseudocode
// split the string into an array using split method
// reverse the order of the array
// rejoin array into string

function solution(str){
    let arrayOfString = str.split('');
    arrayOfString = arrayOfString.reverse();
    arrayOfString = arrayOfString.join('');
    return arrayOfString
}
solution('world')
