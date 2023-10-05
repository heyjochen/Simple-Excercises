/// array of numberrsss
/// sum of max K elements

const contSum = (arr, K) => {
  // track leeeeft, right, maxSum, currSum
  let windowL = 0,
    maxSum = 0,
    currSum = 0;
  // loop through the array
  for (let windowR = 0; windowR < arr.length; windowR++) {
    currSum += arr[windowR];
    if (windowR >= K - 1) {
      maxSum = Math.max(currSum, maxSum);
      currSum -= arr[windowL];
      windowL++;
    }
  }
  return maxSum;
};

console.log(contSum([1, 2, 3, 4, 6, 6, 6], 3));
