let arr = [1, 3, 8, 9, 11, 15]
let val = 11

const binS = (arr, val) => {
  let lo = 0
  let hi = arr.length - 1

  while (lo < hi) {
    let mid = Math.floor(lo + (hi - lo) / 2)

    if (arr[mid] === val) {
      return mid
    } else if (arr[mid] < val) {
      lo = mid
    } else {
      hi = mid - 1
    }
  }
  return false
}
console.log(binS(arr, val))
