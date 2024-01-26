var maxArea = function(height) {
  let result = 0,
    l = 0,
    r = height.length - 1

  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r])
    result = Math.max(area, result)
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }

  return result
};





