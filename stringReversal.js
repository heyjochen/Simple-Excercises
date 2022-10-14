/*

Given a string of text, write an algorithm that returns the text received in a reversed format. E.g

reverseString('algorithms') // should return 'smhtirogla'

*/

// builtInMethods

const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString('algorithms'));

// for loop
const reverseString2 = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};
console.log(reverseString2('algorithms'));

// recursion
const reverseString3 = (str) => {
  if (str === '') {
    return '';
  } else {
    // continously grab the first character of each string and call the function with the characters after the first character until we reach the end. Once that happens the characters will add to the new string
    return reverseString3(str.substring(1)) + str[0];
  }
};
console.log(reverseString3('algorithms'));

// reduce
const reverseString4 = (str) => {
  return str.split('').reduce((prevChar, currChar) => currChar + prevChar, '');
};
console.log(reverseString4('algorithms'));
