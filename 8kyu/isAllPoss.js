/*

A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

Example:

a=[1,2,0,3]
a.length-1=3 
a includes [0,3] ,hence the function should return true
*/

const isAllPossibilities = (arr) => {
  const myNewFunction = (s) => s.length - 1 == s[s.length - 1] && s[0] == 0;
  return myNewFunction(arr.sort((a, b) => +a - +b));
};

const isAllPossibilities2 = (_, arr = _.sort((a, b) => +a - +b)) =>
  arr.length - 1 == arr[arr.length - 1] && arr[0] == 0;

const isAllPossibilities3 = (_, arr = _.sort((a, b) => +a - +b)) =>
  arr.length - 1 == arr[arr.length - 1] && arr[0] == 0;
