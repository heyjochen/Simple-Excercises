/*

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!



*/

//P: string
//R: string all lower or upper
//E: ("coDe") = "code", ("CODe") = "CODE"
//P: filter for all uppercase, then combine to length/2,

function solve(s) {
  const upper = s.split("").filter((char) => char === char.toUpperCase());
  return upper.length > s.length / 2
    ? s.toUpperCase()
    : upper.length < s.length / 2
    ? s.toLowerCase()
    : s.toLowerCase();
}
