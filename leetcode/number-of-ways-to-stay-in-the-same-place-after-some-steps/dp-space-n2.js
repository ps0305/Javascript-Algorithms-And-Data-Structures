/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
/*
dp[n][m] = dp[n - 1][m] + dp[n - 1][m - 1] + dp[n - 1][m + 1];
next[m] = dp[m] + dp[m - 1] + dp[m + 1];
*/
const M = 10 ** 9 + 7;

var numWays = function(steps, arrLen) {
  const n = steps;
  const m = arrLen;
  const dp = new Array(n + 1).fill(null).map(() => new Array(m).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < m; j++) {
      const val =
        dp[i - 1][j] + (j - 1 >= 0 ? dp[i - 1][j - 1] : 0) + (j + 1 < m ? dp[i - 1][j + 1] : 0);
      dp[i][j] = val % M;
    }
  }
  return dp[n][0];
};
