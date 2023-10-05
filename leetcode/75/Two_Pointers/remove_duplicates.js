const removeDuplicates = (arr) => {
  let left = 1,
    right = 1;

  while (right < arr.length) {
    if (arr[left - 1] !== arr[right]) {
      arr[left] = arr[right];
      left++;
    }
    right++;
  }
  return left;
};

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 3, 5, 6, 6, 9]));
