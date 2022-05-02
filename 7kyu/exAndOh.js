/*

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

//P: string
//R: boolean, true if number of x and o is same
//E: XO("ooxXm") => true
//P: string.toLowerCase.split(''), create two counters, loop through and depending on character add to counter, then compare the two counters 

function XO(str) {
   let XCounter = 0,
       OCounter = 0
    const arrOfString = str.toLowerCase().split('');
    arrOfString.forEach((e) => {
        if (e === 'x') XCounter += 1
        else if (e === 'o') OCounter += 1
    })

    return XCounter === OCounter
}


// We can also use regex to solve this problem
function XO(str) {
    let a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}