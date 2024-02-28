const asteroidCollision = asteroids => {
  const res = []

  for (let [i, a] of asteroids.entries()) {
    const curr = a
    const last = res[res.length - 1]

    if (!res.length || curr > 0 || last < 0) {
      res.push(curr)
    } else if (-curr === last) {
      res.pop()
    } else if (-curr > last) {
      res.pop()
      i--
    }
  }

  return res
}

