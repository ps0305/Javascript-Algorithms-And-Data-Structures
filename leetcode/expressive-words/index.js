/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
  const map = createStretchyMap(S);
  let nWords = 0;
  for (const word of words) {
    if (isStretchy(map, S, word)) {
      nWords += 1;
    }
  }
  return nWords;
};

function isStretchy(m1, S, word) {
  const m2 = createStretchyMap(word);
  let i = 0;
  for (let j = 0; j < word.length; ) {
    const f1 = m1[i];
    const f2 = m2[j];
    const isInvalid = S[i] !== word[j] || (f1 !== f2 && (f2 > f1 || f1 < 3));
    if (isInvalid) {
      return false;
    }
    i += f1;
    j += f2;
  }
  return i === S.length;
}

function createStretchyMap(str) {
  const map = {};
  for (let i = 0; i < str.length; ) {
    let j = i;
    while (str[j] === str[i]) {
      j += 1;
    }
    map[i] = j - i;
    i = j;
  }
  return map;
}
