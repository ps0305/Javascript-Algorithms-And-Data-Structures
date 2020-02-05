/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const visited = new Set([beginWord]);
  const queue = [[beginWord, 1]];
  while (queue.length) {
    const [word, length] = queue.shift();
    if (word === endWord) {
      return length;
    }
    for (const w of wordList) {
      if (isValid(word, w) && !visited.has(w)) {
        visited.add(w);
        queue.push([w, length + 1]);
      }
    }
  }
  return 0;
};

function isValid(w1, w2) {
  let diff = 0;
  for (let i = 0; i < w1.length; i++) {
    if (w1[i] !== w2[i]) {
      diff += 1;
    }
    if (diff > 1) {
      return false;
    }
  }
  return true;
}
