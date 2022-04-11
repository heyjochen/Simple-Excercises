/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

//P: string
//R: true if no repeating letter, false if repeating letters
//E: "Dermatoglyphics" --> true
//P: create a new Set out of the converted string and compare it's size to its length. It will return true for isograms and false for non isograms

function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }