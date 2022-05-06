/*

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/

//P: triplet array with numbers
//R: index of the numberial element lies between the other two elements
//E: gimme([5, 10, 14]) => 1
//P: I use .find to find the elementIndex that is between Math.min(...) and Math.max(...)

function gimme (triplet) {
    const middle = triplet.find((e, i) => e > Math.min(...triplet) && e < Math.max(...triplet))
    return triplet.indexOf(middle)
}
gimme([5, 10, 14])