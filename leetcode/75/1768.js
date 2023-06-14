const mergeWord = (word1, word2) => {
  let output = ''
  let maxLength = Math.max(word1, word2)

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) { output += word1[i] }
    if (i < word2.length) { output += word2[i] }
  }
  return output
}
