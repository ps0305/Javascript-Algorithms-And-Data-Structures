/**
 * @param {string[]} words
 */
var WordDistance = function(words) {
  this.map = words.reduce((acc, word, i) => {
    if (!(word in acc)) acc[word] = [];
    acc[word].push(i);
    return acc;
  }, {});
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
  const ids1 = this.map[word1];
  const ids2 = this.map[word2];
  // prettier-ignore
  let i = 0, j = 0;
  let distance = Infinity;
  while (i < ids1.length && j < ids2.length) {
    distance = Math.min(distance, Math.abs(ids1[i] - ids2[j]));
    if (ids1[i] < ids2[j]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return distance;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(words)
 * var param_1 = obj.shortest(word1,word2)
 */
