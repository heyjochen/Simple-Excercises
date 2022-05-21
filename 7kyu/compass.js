/*

You have an 8-wind compass, like this:

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE"

*/

//P: direction I am facing as string and a certain degree to turn, multiple of 45
//R: direction facing after the turn
//E: "W",  495  -->  "NE"
//P: could build an array with all directions, degree /45 means how many we skip, but what if we go past the end of array? we have to count amount we skip - length

function direction(facing, turn) {
  let arr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
  return arr[(arr.indexOf(facing) + Math.floor(turn / 45) + 1080) % 8];
}
