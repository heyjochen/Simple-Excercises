/*

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

    'a' maps to ".-",
    'b' maps to "-...",
    'c' maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

    For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.

Return the number of different transformations among all words we have.

*/

var uniqueMorseRepresentations = function (words) {
  let morse = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];

  // loop through the words array, remap the the word itself to transformation of individual string
  // let us create a hashmap that stores the transformation of each word as a count

  // how to get the position of each letter in alphabet when a is 0 and z is 25
  // let posititionInMorseAlphabet = `${char}`.charCodeAt(0) - 97

  const morseWords = words.map((word) =>
    word
      .split('')
      .map((char) => morse[`${char}`.charCodeAt(0) - 97])
      .join('')
  );

  const unique = new Set(morseWords);
  return unique.size;
};
