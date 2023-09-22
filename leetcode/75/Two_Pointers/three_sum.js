const threeSum = (arr) => {
  let results = [];

  // sort
  arr.sort((a, b) => a - b);
  // for loop
  for (let i = 0; i < arr.length - 2; i++) {
    // check for first el being duplicate
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    // set up pointers
    let left = i + 1,
      right = arr.length - 1;

    // loop through
    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      // check for result wanted and increase pointers
      if (currentSum === 0) {
        results.push([arr[left], arr[right], arr[i]]);
        left++;
        right--;

        // handle duplicates on the left
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }

        // handle duplicates on the right
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (currentSum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return results;
};
