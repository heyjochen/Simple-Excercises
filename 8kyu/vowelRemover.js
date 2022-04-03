/*

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/


//P: string
//R: string without vowels
//E: "hello"     -->  "hll"
//P: arr.split, create new arr with filter (e => e !== e || ...), new arr join into str, return str

function shortcut (string) {

    const arrOfString = string.split('')
    const filterArr = arrOfString.filter(e => e !== 'a' && e !== 'e' && e !== 'i' && e !== 'o' &&  e !== 'u')
    return filterArr.join('')

  }
