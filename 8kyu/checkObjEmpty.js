/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/

let party = {}
function isEmpty(party) {
for (let key in party) {
    return false;
}   return true
}
