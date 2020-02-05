/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const k = 2;
  const m = prices.length;
  const maxs = new Array(k + 1).fill(-prices[0]);
  let dp = new Array(k + 1).fill(0);
  for (let i = 1; i < m; i++) {
    const next = new Array(k + 1).fill(0);
    for (let n = 1; n <= k; n++) {
      maxs[n] = Math.max(maxs[n], dp[n - 1] - prices[i - 1]);
      next[n] = Math.max(dp[n], prices[i] + maxs[n]);
    }
    dp = next;
  }
  return Math.max(...dp, 0);
};
