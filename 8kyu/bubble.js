function bubble(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubble([4, 3, 2, 1]));
