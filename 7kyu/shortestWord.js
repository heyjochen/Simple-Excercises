/*

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

//P: string of words
//R: return length of shortest word
//E:("bitcoin take over the world maybe who knows perhaps"), 3);
//P: string.split(' '), map.(e => e.length), Math.min(...arr)

function findShort(s){
    const arrOfWords = s.split(' ').map(e => e.length)
    return Math.min(...arrOfWords)
}

// we can do all of it in one line

function findShort(s){
    return Math.min(...s.split(' ').map(s => s.length));
}