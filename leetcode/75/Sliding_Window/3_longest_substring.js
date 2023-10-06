var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let length = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    length = Math.max(length, right - left + 1);
  }
  return length
};
