/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/


//Long Story
function countPositivesSumNegatives(input) {
    //filter positives
    // filter negatives
    //count both with length
    // return
    if (input == null || input.length === 0) {
      return []
    } else {
      const positives = input.filter(x => x>0).length
      const negatives = input.filter(x => x<0).reduce((total, value) => total+value,0)
      const makeArr = [positives,negatives] 
      return makeArr
      }
    }

//Short
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}