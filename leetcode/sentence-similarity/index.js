/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilar = function(words1, words2, pairs) {
  if (words1.length !== words2.length) {
    return false;
  }
  const graph = {};
  for (let i = 0; i < pairs.length; i++) {
    const [w1, w2] = pairs[i];
    if (!graph[w1]) {
      graph[w1] = new Set();
    }
    if (!graph[w2]) {
      graph[w2] = new Set();
    }
    graph[w1].add(w2);
    graph[w2].add(w1);
  }
  for (let i = 0; i < words1.length; i++) {
    const w1 = words1[i];
    const w2 = words2[i];
    if (w1 === w2) {
      continue;
    }
    if (!graph[w1] || !graph[w2] || !graph[w1].has(w2) || !graph[w2].has(w1)) {
      return false;
    }
  }
  return true;
};
