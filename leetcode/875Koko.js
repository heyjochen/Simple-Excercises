var minEatingSpeed = function (piles, h) {
  let [left, right] = [1, Math.max(...piles)];

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    const hourSpentEating = getHourSpent(mid, piles);

    if (hourSpentEating <= h) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

const getHourSpent = (mid, piles, hourSpent = 0) => {
  for (const pile of piles) {
    hourSpent += Math.ceil(pile / mid);
  }

  return hourSpent;
};
