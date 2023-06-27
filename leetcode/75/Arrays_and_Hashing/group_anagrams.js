const groupAnagrams = strs => {
  // BF solution
  let hash = {}
  for (let str of strs) {
    let sorted = str.split("").sort().join("")
    hash[sorted] ? hash[sorted].push(str) : hash[sorted] = [str]
  }

  return Object.values(hash)
}
