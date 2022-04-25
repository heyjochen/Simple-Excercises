/*

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/

//P: two strings
//R: true if anagram, else false
//E: "foefet" is an anagram of "toffee"
//P: both strings to LowerCase, make a new set out of the concatenated strings, compare new set to length of first string


// write the function isAnagram
const isAnagram = function(test, original) {
	const testMod = test.toLowerCase().split('').sort().join('').trim();
	const originalMod = original.toLowerCase().split('').sort().join('').trim();
	return (testMod === originalMod)
};
