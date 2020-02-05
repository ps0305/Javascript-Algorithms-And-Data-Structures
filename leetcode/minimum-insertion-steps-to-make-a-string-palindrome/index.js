/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  const m = s.length;
  const dp = new Array(m).fill(null).map(() => new Array(m).fill(Infinity));
  for (let i = 0; i < m; i++) {
    dp[i][i] = 0;
    if (i + 1 < m) {
      const j = i + 1;
      dp[i][j] = s[i] === s[j] ? 0 : 1;
    }
  }
  for (let length = 3; length <= m; length++) {
    for (let i = 0; i + length - 1 < m; i++) {
      const j = i + length - 1;
      dp[i][j] = s[i] === s[j] ? dp[i + 1][j - 1] : Math.min(1 + dp[i + 1][j], dp[i][j - 1] + 1);
    }
  }
  return dp[0][m - 1];
};
