/*

Given a multi d array, return a new flaten array.
Example: [1, [2, 3], [[4]]] should return [1, 2, 3, 4].

*/

const arr = [[1, 2, [3]], 3, 4];

function flatten(arr) {
  let result = arr;
  while (result.some(Array.isArray)) {
    result = [].concat.apply([], result);
  }
  return result;
}

flatten(arr);

// or with the flat method
function flatten(arr) {
  return arr.flat(Infinity);
}
