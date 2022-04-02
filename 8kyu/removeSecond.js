/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that!
*/

//P: arr
//R: modified arr without every second element
//E: ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...] 
//P: filter arr(i % 2 === 0)


function removeEveryOther(arr){
    return arr.filter((e, i)  => i % 2 === 0)
  }