/*

You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

Street
1|   |6
3|   |4
5|   |2
Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

Example (address, n --> output)
Given your house number address and length of street n, give the house number on the opposite side of the street.

1, 3 --> 6
3, 3 --> 4
2, 3 --> 5
3, 5 --> 8


*/

//P: (address, n) address is the house I get and n is the amount of houses on each side

//R: given address return house on opposite side, 

//E: 2, 3 --> 5

//P: I create two arrays, one uneven, one even, then I find oout if address is uneven or even and depending on that return either unevenArr[address] or evenArr[address]


function overTheRoad(address, n){
  //code here
  let total = 2*n;
  let difference = address-1;
  return total-difference;


}


const { input = '' } = queryString.parse('https://www.fr.de/?foo=bar&abc=xyz&abc=123'.split('?').slice(1).join(''))