/**
 * @param {number[][]} costs
 * @return {number}
 */

/*
  dp[i][j] = min{ dp[i - 1][k] k !== j }
*/
var minCost = function(costs) {
  if (!costs.length) {
    return 0;
  }
  const m = costs.length;
  const n = 3;
  const dp = [...new Array(m)].map(() => new Array(n).fill(Infinity));
  for (let j = 0; j < n; j++) {
    dp[0][j] = costs[0][j];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (k === j) continue;
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + costs[i][j]);
      }
    }
  }
  return Math.min(...dp[m - 1]);
};
