/*

Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)

*/

//P: array of numbers
//R: return array of two integers, first one is total weight of team 1, second is team two
//E: rowWeights([13, 27, 49])  ==>  return (62, 27)
//P: two variables to store weight, loop throu and depending on index add to var 1 or 2

function rowWeights(array){
let result = [0,0]
    array.forEach((e,i) => {
        (i % 2 === 0) ? result[0] += e : result[1] += e;
    })
    return result

}
