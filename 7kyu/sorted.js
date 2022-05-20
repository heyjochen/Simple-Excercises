/*

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

*/

function isSortedAndHow(array) {
    const min = Math.min(...array)
    const max = Math.max(...array)

    return (min === array[0] && max === array[array.length-1]) ? 'yes, ascending' :
    (max === array[0] && min === array[array.length-1]) ? 'yes, descending' :
    'no';
}