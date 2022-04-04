/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

//P: string
//R: vowel count as a number
//E: ("abracadabra"), 5)
//P: new arr from string.split(''), filter if element is 'a' || 'e' ... and return arr.length

function getCount(str) {
    let vowelCount = 0
    let arrVowels = str.split('').filter(e => (e === 'a' || e ==='e' || e === 'i' || e === 'o' || e === 'u')) 
    return arrVowels.length
  }