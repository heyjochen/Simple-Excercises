var sortedSquares = function (nums) {
  let left = 0,
    right = nums.length - 1,
    result = Array(nums.length).fill(0),
    end = nums.length - 1;

  while (left <= right) {
    let squaredLeft = nums[left] * nums[left];
    let squaredRight = nums[right] * nums[right];
    if (squaredLeft > squaredRight) {
      result[end] = squaredLeft;
      left++;
    } else {
      result[end] = squaredRight;
      right--;
    }
    end--;
  }
  return result;
};
