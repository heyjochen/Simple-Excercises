var lengthOfLastWord = function(s) {
  let length = 0

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i]
    if (char === ' ' && length === 0) {
      continue
    }

    if (char !== ' ') {
      length++
    } else {
      break
    }

  }

  return length
};
