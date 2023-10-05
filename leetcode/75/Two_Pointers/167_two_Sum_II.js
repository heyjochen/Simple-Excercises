var twoSum = function (numbers, target) {
  let [left, right] = [0, numbers.length - 1];

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    const isTargetSum = sum === target;
    const isGreater = sum > target;
    const isLesser = sum < target;

    if (isTargetSum) {
      return [left + 1, right + 1];
    }

    if (isGreater) {
      right--;
    }

    if (isLesser) {
      left++;
    }
  }
  return [-1, -1];
};
