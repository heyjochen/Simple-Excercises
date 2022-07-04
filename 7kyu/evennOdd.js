/*

Given a number N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO is formed by odd digits of N? Examples:

input	NE	NO
126453	264	153
3012	2	31
4628	4628	0
0 is considered as an even number.

In C and JavaScript you should return an array of two elements such as the first is NE and the second is NO.

*/

//P: number N
//R: Array [even, odd]
//E: 3012	2	31
//P: arr.split, filter even, filter odd return [even,odd]

function evenAndOdd(num) {
  const odd = +`${num}`
    .split("")
    .filter((e) => e % 2)
    .join("");
  const even = +`${num}`
    .split("")
    .filter((e) => e % 2 === 0)
    .join("");
  return [even, odd];
}
