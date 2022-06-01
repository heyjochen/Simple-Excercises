/*

Description:
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"


*/

//P: remove words from sentence if includes !
//R: return string
//E: remove("Hi! Hi!! Hi!") === "Hi!!"
//P: filter for ! either Hi! or !Hi


const remove = str => str.split(' ').filter(w => w.split('!').length != 2).join(' ');
remove("Hi! !Hi Hi!")