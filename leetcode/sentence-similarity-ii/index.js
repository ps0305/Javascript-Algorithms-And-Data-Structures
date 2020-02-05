/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */

const find = (roots, r) => {
  if (!roots[r]) {
    roots[r] = r;
    return r;
  }
  let ptr = r;
  while (roots[ptr] !== ptr) {
    roots[ptr] = roots[roots[ptr]];
    ptr = roots[ptr];
  }
  return ptr;
};

const union = (roots, r1, r2) => {
  roots[r2] = r1;
};

var areSentencesSimilarTwo = function(words1, words2, pairs) {
  if (words1.length !== words2.length) {
    return false;
  }
  const roots = {};
  for (let i = 0; i < pairs.length; i++) {
    const [w1, w2] = pairs[i];
    const r1 = find(roots, w1);
    const r2 = find(roots, w2);
    if (r1 !== r2) {
      union(roots, r1, r2);
    }
  }
  for (let i = 0; i < words1.length; i++) {
    const r1 = find(roots, words1[i]);
    const r2 = find(roots, words2[i]);
    if (r1 !== r2) {
      return false;
    }
  }
  return true;
};
