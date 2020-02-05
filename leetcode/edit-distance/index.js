/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  let dp = new Array(m + 1).fill(0);
  for (let j = 0; j <= n; j++) {
    dp[j] = j;
  }
  for (let i = 1; i <= m; i++) {
    const next = new Array(m + 1).fill(0);
    next[0] = i;
    for (let j = 1; j <= n; j++) {
      // prettier-ignore
      next[j] = word1[i - 1] === word2[j - 1]
        ? dp[j - 1]
        : 1 + Math.min(dp[j], next[j - 1], dp[j - 1]);
    }
    dp = next;
  }
  return dp[n];
};
