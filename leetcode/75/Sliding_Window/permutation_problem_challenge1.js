// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.

const find_permutation = (str, pattern) => {
  // init windowL, hashmap, substr, isPermutation
  let windowL = 0,
    substr = "",
    isPermutation = false;

  // add to substr until length > pattern.length,
  for (let windowR = 0; windowR < str.length; windowR++) {
    substr += str[windowR];

    if (substr.length >= pattern.length) {
      // helper hashfunction that returns true or false
      isPermutation = hasPermutation(substr, pattern);
      substr.slice(1);
      windowL++;

      if (isPermutation) {
        return true;
      }
    }
  }

  return isPermutation;
};

const hasPermutation = (str, pattern) => {
  let hashmap = {};
  let hasPermutation = true;

  for (const char of pattern) {
    if (hashmap[char] !== 0) {
      hashmap[char]++;
    } else {
      hashmap[char] = 1;
    }
  }

  for (const char of str) {
    if (hashmap[char] !== 1) {
      hasPermutation = false;
    }
  }

  return hasPermutation;
};

console.log(find_permutation("oidbcaf", "abc"));
