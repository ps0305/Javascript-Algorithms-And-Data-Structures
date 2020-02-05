/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const m = s.length;
  const dp = new Array(m).fill(null).map(() => new Array(m).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][i] = 1;
    if (i + 1 < m) {
      dp[i][i + 1] = s[i] === s[i + 1] ? 2 : 1;
    }
  }
  for (let length = 3; length <= m; length++) {
    for (let i = 0; i + length - 1 < m; i++) {
      const j = i + length - 1;
      // prettier-ignore
      dp[i][j] = s[i] === s[j]
        ? dp[i + 1][j - 1] + 2
        : Math.max(dp[i + 1][j], dp[i][j - 1]);
    }
  }
  return dp[0][m - 1];
};
