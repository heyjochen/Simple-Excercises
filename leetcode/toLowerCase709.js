/*

Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

Example 1:

Input: s = "Hello"
Output: "hello"

Example 2:

Input: s = "here"
Output: "here"

Example 3:

Input: s = "LOVELY"
Output: "lovely"


*/

var toLowerCase = function (s) {
  let alphabet = {
    A: 'a',
    B: 'b',
    C: 'c',
    D: 'd',
    E: 'e',
    F: 'f',
    G: 'g',
    H: 'h',
    I: 'i',
    J: 'j',
    K: 'k',
    L: 'l',
    M: 'm',
    N: 'n',
    O: 'o',
    P: 'p',
    Q: 'q',
    R: 'r',
    S: 's',
    T: 't',
    U: 'u',
    V: 'v',
    W: 'w',
    X: 'x',
    Y: 'y',
    Z: 'z',
  };
  let str = '';
  for (char of s) {
    if (char in alphabet) {
      str += alphabet[char];
    } else {
      str += char;
    }
  }
  return str;
};
