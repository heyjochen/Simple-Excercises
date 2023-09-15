const removeDuplicates = (arr) => {
  let current = 1,
    insert = 1;

  while (current < arr.length) {
    if (arr[insert - 1] !== arr[current]) {
      arr[insert] = arr[current];
      insert++;
    }
    current++;
  }
  return insert;
};

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 3, 5, 6, 6, 9]));
