/*

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

*/

//P: arr
//R: total number of smiley faces
//E: countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
//P: arr.filter and then length

function countSmileys(arr) {

    const smileyShort = arr.filter(e => e.length === 2)
    const smileyLong = arr.filter(e => e.length === 3)

    const filterShort = smileyShort.filter(e => (e.charAt(0) === ':' || e.charAt(0) === ';') && (e.charAt(1) === ')' || e.charAt(1) === 'D'))
    const filterLong = smileyLong.filter(e => (e.charAt(0) === ':' || e.charAt(0) === ';') && (e.charAt(1) === '-' || e.charAt(1) === '~') && (e.charAt(2) === ')' || e.charAt(2) === 'D'))

    return filterShort.length + filterLong.length 
}

// We could also create a variable that holds all valid smilies and loop through an inner loop comparing each element to the other one

function countSmileys(arr) {
    var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    var count = 0;
    
    for (var i=0; i<arr.length; i++){
      for (var j=0; j<smileys.length; j++){
        if (arr[i]===smileys[j]){
          count++;
        }
      }
      }
    return count;
    }