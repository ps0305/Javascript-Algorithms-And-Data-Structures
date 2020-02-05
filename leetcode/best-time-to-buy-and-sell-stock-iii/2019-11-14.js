/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const m = prices.length;
  const k = 2;
  const dp = new Array(m + 1).fill(null).map(() => new Array(k + 1).fill(0));
  for (let i = 2; i <= m; i++) {
    for (let n = 1; n <= k; n++) {
      dp[i][n] = helper(dp, prices, i, n);
    }
  }
  return Math.max(...dp[m]);
};

function helper(dp, prices, i, n) {
  let max = dp[i - 1][n];
  for (let j = 1; j <= i - 1; j++) {
    const margin = prices[i - 1] - prices[j - 1];
    max = Math.max(max, dp[j][n - 1] + margin);
  }
  return max;
}
