const targetIndices = (nums, target) => {
  let lowerCount = 0;
  let matchesCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      ++lowerCount;
    } else if (nums[i] === target) {
      ++matchesCount;
    }
  }
  let result = [];

  for (let j = lowerCount; j < lowerCount + matchesCount; j++) {
    result.push(j);
  }
  return result;
};
