/*

You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.


*/

//P: arr, a, b
//R: boolean
//E: (consecutive([1, 3, 5, 7], 3, 7), false);
//P: check if a is before or after b

function consecutive(arr, a, b) {
  return (
    arr.indexOf(a) + 1 === arr.indexOf(b) ||
    arr.indexOf(a) - 1 === arr.indexOf(b)
  );
}

consecutive([1, 3, 5, 7], 3, 7);
