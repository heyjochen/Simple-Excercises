var countNegatives = function(grid) {
  let negatives = 0;

  for (const g of grid) {
    let l = 0,
      r = g.length - 1;

    while (l <= r) {
      let mid = Math.floor((r + l) / 2);

      if (g[mid] < 0) {
        negatives += r - mid + 1;
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return negatives;
};


