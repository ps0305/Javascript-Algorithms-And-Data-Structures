/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const m = s.length;
  const n = p.length;
  const dp = [...new Array(m + 1)].map(() => new Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j <= n; j++) {
    const i = 0;
    dp[i][j] = p[j - 1] === '*' && dp[i][j - 2];
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = helper(s, p, i, j, dp);
    }
  }
  return dp[m][n];
};

function helper(s, p, i, j, dp) {
  if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
    return dp[i - 1][j - 1];
  }
  if (p[j - 1] === '*') {
    return ((s[i - 1] === p[j - 2] || p[j - 2] === '.') && dp[i - 1][j]) || dp[i][j - 2];
  }
  return false;
}
