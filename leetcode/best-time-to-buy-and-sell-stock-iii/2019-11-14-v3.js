/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const k = 2;
  const m = prices.length;
  let dp = new Array(m).fill(0);
  let max = 0;
  for (let n = 1; n <= k; n++) {
    const next = new Array(m).fill(0);
    for (let i = 0; i < m; i++) {
      next[i] = helper(dp, next, prices, n, i);
      max = Math.max(max, next[i]);
    }
    dp = next;
  }
  return max;
};

function helper(dp, next, prices, n, i) {
  let max = next[i - 1] || 0;
  for (let j = 0; j <= i; j++) {
    const margin = prices[i] - prices[j];
    max = Math.max(max, dp[j] + margin);
  }
  return max;
}
