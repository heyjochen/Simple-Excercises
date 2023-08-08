const contSum = (arr, K) => {
  // What are the bounds of your loop? Loop until arr.length
  // When are you sliding the window? If case when Right >= your K - 1 size (0 indexed)
  // What extra variable do you need to keep track? left pointer, sum, result
  let left = 0;
  let sum = 0;
  let result = [];

  // Build a Sum
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    // Slide the window
    if (right >= K - 1) {
      result.push(sum / K);
      sum -= arr[left];
      left++;
    }
  }

  return result;
};

console.log(contSum([1, 4, 5, 2, 1, 3, 4], 3));
