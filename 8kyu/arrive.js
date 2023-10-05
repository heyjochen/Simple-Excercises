// Return the key and the number of appearances for the least and most frequent entry of an array
// Examples:

// minAndMax(['a', 'a', 'b']) => { min: { b: 1 }, max: { a: 2 }}

// minAndMax([1, 1, 3, 2, 4, 4, 5, 5, 5, 9, 9, 2]) => {
//   min: { 3: 1 },
//   max: { 5: 3 },
// }

// Rules:
// No there will never be the 2 different elements for the same amount of times of min or max
// Example [1,1,2,2,3,3,3] => Does NOT need to be accounted for.

// Takes in unsorted array and wants to return the least and most frequent entry of an array

// Return it as an object with a key of min / max that has a value of an object with a key of the number and a value of its count

// Loop through the input array and create a map
// Set both the min and the max as the first entry and only reassign when smaller / bigger

const minAndMax = (arr) => {
  let result = {
    min: { 0: 0 },
    max: { 0: 0 },
  };
  let map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
};
