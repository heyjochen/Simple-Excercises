/* 

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

//P: two string
//R: one string containing distinct letters
//E: a = "abcdefghijklmnopqrstuvwxyz"
//E: longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
//P: concatenate both strings, then create new set and return the set
function longest(s1, s2) {
    const concatenated = s1+s2
    const unique = new Set(concatenated)
    let arrayfromSet = [...unique]
    arrayfromSet = arrayfromSet.sort((a,b) => a.localeCompare(b))
    return arrayfromSet.join('')
  }

// Easier, concise
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
