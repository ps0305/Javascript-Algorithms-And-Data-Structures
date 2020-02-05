/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
/*
  s = 'rab b'
  t = 'rab'
*/
/*
  dp[i][j] = dp[i - 1][j] + (s[i - 1] === t[i - 1] ? dp[i - 1][j - 1] : 0);
*/
var numDistinct = function(s, t) {
  const m = s.length;
  const n = t.length;
  const dp = [...new Array(m + 1)].map(() => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i - 1][j] + (s[i - 1] === t[j - 1] ? dp[i - 1][j - 1] : 0);
    }
  }
  return dp[m][n];
};
