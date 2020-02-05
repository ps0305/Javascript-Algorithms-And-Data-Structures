/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(kTimes, prices) {
  if (!kTimes || !prices.length) {
    return 0;
  }
  const n = prices.length;
  if (kTimes >= n / 2) {
    return greedy(prices);
  }
  return dpFn(kTimes, prices);
};

function dpFn(kTimes, prices) {
  const n = prices.length;
  const dp = new Array(n).fill(0);
  let min = prices[0];
  for (let i = 1; i < n; i++) {
    min = Math.min(min, prices[i]);
    dp[i] = Math.max(dp[i - 1], prices[i] - min);
  }
  for (let k = 2; k <= kTimes; k++) {
    let maxDiff = dp[0] - prices[0];
    for (let i = 1; i < n; i++) {
      const diff = dp[i] - prices[i];
      dp[i] = Math.max(dp[i - 1], maxDiff + prices[i]);
      maxDiff = Math.max(maxDiff, diff);
    }
  }
  return dp[n - 1];
}

function greedy(prices) {
  let output = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      output += prices[i] - prices[i - 1];
    }
  }
  return output;
}
