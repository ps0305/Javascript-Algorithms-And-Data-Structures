/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var minDistance = function(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = [...new Array(m + 1)].map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = (() => {
        if (word1[i - 1] === word2[j - 1]) {
          return dp[i - 1][j - 1] + 1;
        }
        return Math.max(dp[i][j - 1], dp[i - 1][j]);
      })();
    }
  }
  return word1.length + word2.length - 2 * dp[m][n];
};
