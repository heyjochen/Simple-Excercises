function merger(arr1, arr2) {
  // consist of numbers? // negative numbers? // how big are the arrays? // are arrays ever empty or only one item?
  // return one array same sort order
  // if I want O(a + b) how do I have to loop?
  // loop through one array, have an extra array to keep the values
  let result = [];
  let i = 0;
  let j = 0;
  let arr1Item = arr1[i];
  let arr2Item = arr2[j];

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      result.push(arr1Item);
      i++;
    } else {
      result.push(arr2Item);
      j++;
    }
  }
  return result;
}

let arr1 = [1, 1, 3, 4, 5];
let arr2 = [2, 3, 4];
console.log(merger(arr1, arr2));
