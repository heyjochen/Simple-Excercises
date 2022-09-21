let str = 'falsee';
let str2 = 'true';

function uniqueCharsInStr(word) {
  let comparisonStr = '';
  for (let char of word) {
    if (comparisonStr.includes(char)) {
      return false;
    } else {
      comparisonStr += char;
    }
  }
  return true;
}

uniqueCharsInStr(str);
