/*

searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"

*/

const searchReplace = (sentence, toBeReplaced, replaceWith) => {
  if (toBeReplaced[0] === toBeReplaced[0].toUpperCase()) {
    replaceWith = replaceWith[0].toUpperCase() + replaceWith.slice(1);
  }
  return sentence.replace(toBeReplaced, replaceWith);
};
console.log(
  searchReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')
);
