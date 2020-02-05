/**
 * @param {number[]} prices
 * @return {number}
 */

/*
  dp(i) = Max{ dp(j - 1) + price[i] - price[j] } j from 0 to i - 1
*/

var maxProfit = function(prices) {
  if (!prices.length) {
    return 0;
  }
  const n = prices.length;
  const dp = [...new Array(3)].map(() => new Array(n).fill(0));
  let min = Infinity;
  for (let j = 0; j < n; j++) {
    min = Math.min(min, prices[j]);
    dp[1][j] = Math.max(dp[1][j - 1] || 0, prices[j] - min);
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      dp[2][i] = Math.max(dp[2][i], (dp[1][j] || 0) + prices[i] - prices[j]);
    }
    dp[2][i] = Math.max(dp[2][i], dp[2][i - 1]);
  }
  return dp[2][n - 1];
};
