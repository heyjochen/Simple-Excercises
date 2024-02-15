var minEatingSpeed = function(piles, h) {
  let [left, right] = [1, Math.max(...piles)]

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const hoursEating = getEatingSpeedperHour(piles, mid)

    if (h < hoursEating) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return left
};

const getEatingSpeedperHour = (piles, mid) => {
  let hoursEating = 0
  for (const p of piles) {
    hoursEating += Math.ceil(p / mid)
  }

  return hoursEating
}
