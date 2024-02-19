const longestConsecutive = nums => {
  if (nums.length === 0) {
    return 0;
  }

  let set = new Set(nums);
  let longest = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentStreak = 1;

      while (set.has(num + currentStreak)) {
        currentStreak++;
      }


      longest = Math.max(longest, currentStreak);
    }
  }

  return longest;
};

