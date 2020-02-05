/**
 * @param {string[]} words
 * @return {number}
 */
/*
dp[n][i] = max {
  dp[n - 1][j] + 1 if words[j], words[i] are connected
}
*/
var longestStrChain = function(words) {
  const [map, min, max] = createMap(words);
  let dp = new Array(map[min].length).fill(1);
  let output = 1;
  for (let length = min + 1; length <= max; length++) {
    const next = new Array(map[length].length).fill(1);
    for (let i = 0; i < map[length].length; i++) {
      for (let j = 0; j < map[length - 1].length; j++) {
        if (isPredecessor(map[length - 1][j], map[length][i])) {
          next[i] = Math.max(next[i], dp[j] + 1);
        }
      }
    }
    dp = next;
    output = Math.max(output, ...dp);
  }
  return output;
};

function isPredecessor(s1, s2) {
  const set = new Set(s2);
  for (const c of s1) {
    if (!set.has(c)) {
      return false;
    }
  }
  return true;
}

function createMap(words) {
  const map = {};
  let min = Infinity;
  let max = -Infinity;
  for (const word of words) {
    if (!(word.length in map)) map[word.length] = [];
    map[word.length].push(word);
    min = Math.min(min, word.length);
    max = Math.max(max, word.length);
  }
  return [map, min, max];
}
