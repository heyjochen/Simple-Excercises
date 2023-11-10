var sortColors = function(arr) {
  let low = 0;
  let high = arr.length - 1;
  let i = 0;

  while (i <= high) {
    switch (arr[i]) {
      case 0:
        [arr[i], arr[low]] = [arr[low], arr[i]];
        low++;
        i++;
        break;
      case 1:
        i++;
        break;
      case 2:
        [arr[i], arr[high]] = [arr[high], arr[i]];
        high--;
        break;
    }
  }

  return arr;
};
