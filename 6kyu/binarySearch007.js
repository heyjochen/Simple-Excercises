let numbers = [2, 3, 18, 992, 10001, 188829];
let value = 10001;

// Write a binary search to find value's position in numbers

function binarySearch(numbers, value) {
  let lo = 0;
  let hi = numbers.length;

  while (lo < hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);

    if (numbers[mid] === value) {
      return mid;
    } else if (value > numbers[mid]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return false;
}

console.log(binarySearch(numbers, value));
