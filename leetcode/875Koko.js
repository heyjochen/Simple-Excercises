var minEatingSpeed = function(piles, h) {
  let [left, right] = [1, Math.max(...piles)];

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    const eatingHours = getHours(mid, piles)

    if (h < eatingHours) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
};

const getHours = (mid, piles, hours = 0) => {
  for (const pile of piles) {
    hours += Math.ceil(pile / mid)
  }

  return hours
}
