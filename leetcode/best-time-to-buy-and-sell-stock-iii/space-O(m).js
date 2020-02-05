/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const k = 2;
  const m = prices.length;
  let dp = new Array(m).fill(0);
  for (let n = 1; n <= k; n++) {
    const next = new Array(m).fill(0);
    let max = dp[0] - prices[0];
    for (let i = 1; i < m; i++) {
      max = Math.max(max, dp[i - 1] - prices[i]);
      next[i] = Math.max(next[i - 1], prices[i] + max);
    }
    dp = next;
  }
  return Math.max(...dp, 0);
};
