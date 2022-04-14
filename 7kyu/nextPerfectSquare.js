/*

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect s

*/

// P: a number that is or is not a perfect square
// R: the next perfect square
// E: 121 --> 144
// P: first check if the sqrt of the number is an integer (no decimals), if not return -1
// otherwise calc the sqroot and return sqroot +1 times sqroot +1

function findNextSquare(sq) {
    if (Math.sqrt(sq) - Math.floor(Math.sqrt(sq)) !== 0) {return -1;}
    else {
      let sqroot = Math.sqrt(sq)
      return (sqroot+1) * (sqroot+1)
    }
}

// We can also check if there is a remainder of the square root
// and then use Math.pow

function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}