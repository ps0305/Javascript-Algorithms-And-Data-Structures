/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
  // prettier-ignore
  let w1 = -1, w2 = -1;
  let distance = Infinity;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      w1 = i;
    } else if (words[i] === word2) {
      w2 = i;
    }
    if (w1 >= 0 && w2 >= 0) {
      distance = Math.min(distance, Math.abs(w1 - w2));
    }
  }
  return distance;
};
