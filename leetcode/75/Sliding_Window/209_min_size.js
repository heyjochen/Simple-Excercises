/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let windowL = 0,
    length = Infinity,
    sum = 0;

  for (let windowR = 0; windowR < nums.length; windowR++) {
    sum += nums[windowR];

    while (sum >= target) {
      length = Math.min(length, windowR - windowL + 1);
      sum -= nums[windowL];
      windowL++;
    }
  }

  if (length === Infinity) {
    return 0;
  }

  return length;
};
