/*

Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

*/

const maxNumberOfBalloons1 = function (text) {
  const map = { b: 0, a: 0, l: 0, o: 0, n: 0 };

  for (const l of text) {
    map[l]++;
  }

  return Math.floor(Math.min(map.b, map.a, map.l / 2, map.o / 2, map.n));
};

const maxNumberOfBalloons2 = (text) => {
  let obj = {},
    balloonCount = 0;
  for (let el of text) {
    obj[el] = (obj[el] || 0) + 1;
  }

  while (
    obj['a'] > 0 &&
    obj['b'] > 0 &&
    obj['l'] > 1 &&
    obj['n'] > 0 &&
    obj['o'] > 1
  ) {
    balloonCount++;

    obj['a']--;
    obj['b']--;
    obj['l'] -= 2;
    obj['n']--;
    obj['o'] -= 2;
  }

  return balloonCount;
};
