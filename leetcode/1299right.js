var replaceElements = function(arr) {
  let max = -1

  for (let i = arr.length - 1; i >= 0; i--) {
    let currentMax = arr[i]
    arr[i] = max
    max = Math.max(currentMax, arr[i])
  }

  return arr
};




