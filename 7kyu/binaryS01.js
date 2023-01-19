let arr = [2, 3, 6, 9, 12, 15];
let val = 12;

const binS = (arri, valu) => {
  let lo = 0;
  let hi = arri.length;

  while (lo < hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);

    if (arri[mid] === valu) {
      return true;
    } else if (arri[mid] > val) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return false;
};

console.log(binS(arr, val));
