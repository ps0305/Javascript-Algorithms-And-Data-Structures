/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  // prettier-ignore
  const map = order
    .split('')
    .reduce((acc, cur, i) => ({ ...acc, [cur]: i }), {});
  for (let i = 0; i <= words.length - 2; i++) {
    let j = 0;
    while (words[i][j] === words[i + 1][j]) {
      j += 1;
    }
    // prettier-ignore
    const isInvalid = j >= words[i + 1].length && i < words[i].length ||
      map[words[i][j]] > map[words[i + 1][j]];
    if (isInvalid) {
      return false;
    }
  }
  return true;
};
