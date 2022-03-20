/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5" (in COBOL "found the needle at position 6")
*/


// create function with arr as parameter
// parse through arr and look for string of needle, indexOf()
// return message plus the index


function findNeedle (arr) {
    let needleIndex = arr.indexOf('needle')
    return `found the needle at position ${needleIndex}`
}

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

// code can be made shorter

function findNeedle (arr) {
    return `found the needle at position ${arr.indexOf('needle')}`
}
