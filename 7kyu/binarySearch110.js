const binaryS = (arr, val) => {
  let hi = arr.length;
  let lo = 0;

  while (lo < hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);

    if (val === arr[mid]) {
      return `Yes, found`;
    }

    if (val < arr[mid]) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
};

console.log(binaryS([1, 3, 5, 9, 11], 9));
