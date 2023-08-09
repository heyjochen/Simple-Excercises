var countGoodSubstrings = function (s) {
  // calc the substring
  let left,
    count = 0;
  let sub = "";
  // slide the window
  for (let right = 0; right < s.length; right++) {
    sub += s[right];
    if (right >= 2) {
      let set = new Set([...sub]).size;
      if (set === 3) {
        count++;
      }
      sub = sub.slice(1, sub.length);
      left++;
    }
  }
  return count;
};
