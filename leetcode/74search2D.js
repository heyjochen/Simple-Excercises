var searchMatrix = function(matrix, target) {
  let m = matrix.length,
    n = matrix[0].length,
    left = 0,
    right = m * n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let mid_el = matrix[Math.floor(mid / n)][mid % n];

    if (mid_el === target) {
      return true;
    } else if (mid_el < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
};
