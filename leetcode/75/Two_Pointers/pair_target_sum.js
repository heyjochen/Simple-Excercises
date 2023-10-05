const targetSum = (arr, target) => {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    // can be improved by making variable sum
    if (arr[left] + arr[right] === target) {
      return [left, right];
    }

    if (arr[left] + arr[right] > target) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
};
