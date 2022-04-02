/*

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/

function maps(x){
    let newArray = x.map(x => x * 2)
    return newArray
  }

// or on the same arr

  function maps(x){
    return x.map(n => n * 2);
  }

  maps ([1, 2, 3])