const twoSum = (arr, target) => {
  let hash = {}
  for (let i = 0; i < arr.length; i++) {
    if (target - arr[i] in hash) {
      return [i, hash[target - arr[i]]]
    }
    hash[arr[i]] = i
  }
}

console.log(twoSum([2, 4, 6, 7], 11))
