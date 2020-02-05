/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const k = 2;
  const m = prices.length;
  const dp = new Array(k + 1).fill(null).map(() => new Array(m).fill(0));
  for (let n = 1; n <= k; n++) {
    for (let i = 0; i < m; i++) {
      dp[n][i] = helper(dp, prices, n, i);
    }
  }
  return Math.max(...dp[k], 0);
};

function helper(dp, prices, n, i) {
  let max = dp[n][i - 1] || 0;
  for (let j = 0; j <= i; j++) {
    const margin = prices[i] - prices[j];
    max = Math.max(max, dp[n - 1][j] + margin);
  }
  return max;
}
