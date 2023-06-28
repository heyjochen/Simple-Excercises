const groupAnagrams = strs => {
  o  // let hash = {}
  // for (let str of strs) {
  //   let sorted = str.split("").sort().join("")
  //   hash[sorted] ? hash[sorted].push(str) : hash[sorted] = [str]
  // }
  //
  // return Object.values(hash)

  // Optimized
  let hash = {}

  for (let str of strs) {
    let arr = Array(26).fill(0)

    for (let char of str) {
      arr[char.charCodeAt() - 97]++
    }

    let count = arr.join('.')
    hash[count] ? hash[count].push(str) : hash[count] = [str]
  }

  return Object.values(hash)
}
