const isAnagram = (s, t) => {
  // BF solution
  let isAnagram = false

  if (s.length !== t.length) {
    return false
  }

  s = s.split("").sort()
  t = t.split("").sort()

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) {
      isAnagram = true
    } else {
      return false
    }
  }
  return isAnagram
};
