/*

You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

*/

// simple for loop

var interpret = function (command) {
  let str = '';
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      str += 'G';
    }
    if (command[i] === '(' && command[i + 1] === ')') {
      str += 'o';
    }
    if (
      command[i] === '(' &&
      command[i + 1] === 'a' &&
      command[i + 2] === 'l' &&
      command[i + 3] === ')'
    ) {
      str += 'al';
    }
  }
  return str;
};
