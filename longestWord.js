/*


    Given a sentence, return the longest word in the string. E.g


longestWord('Top Shelf Web Development Training on Scotch') 
//should return 'Development'

*/
// sort
const longestWord = (str) =>
  str.split(' ').sort((a, b) => b.length - a.length)[0];

// for loop
const longestWord2 = (str) => {
  str = str.split(' ');
  let answer = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i].length > answer.length) {
      answer = str[i];
    }
  }
  return answer;
};

console.log(longestWord2('Top Shelf Web Development Training on Scotch'));

// reduce
const longestWord3 = (str) =>
  str
    .split(' ')
    .reduce((acc, curr) => (curr.length > acc.length ? curr : acc), '');

console.log(longestWord3('Top Shelf Web Development Training on Scotch'));
