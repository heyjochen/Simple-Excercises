/*

Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.

minimum(10, 6)  //= 2

10+2 = 12 which is a multiple of 6

*/
// P: int a and b
// R: min non neg number to add / subtr from a to make it multiple of b
// E; How can we check for number to subtract, how can we check for number to add? How can we find the smaller of those two?

function minimum(a, x) {
  return Math.min(x - (a % x), a % x);
}

// to find out how much we need to add to a to make it a multiple of x we calculate x - (a % x)
// to find out how much we need to subtract from a (or add to x)  to make it a multiple of x we calculate a % x

/*A = [
    [1, 1, 0],
    [9, 4, 1],
    [10, 6, 2],
    [60, 45, 15],
    [57, 50, 7],
    [28, 16, 4],
    [84, 80, 4],
    [129, 49, 18],
    [150, 67, 16],
    [121, 46, 17],
    [83, 81, 2],
    [89, 74, 15]       
]
*/
