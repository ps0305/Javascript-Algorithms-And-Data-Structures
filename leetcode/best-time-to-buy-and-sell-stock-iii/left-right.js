/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const n = prices.length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  let min = prices[0];
  for (let i = 1; i < n; i++) {
    min = Math.min(min, prices[i]);
    left[i] = Math.max(left[i - 1], prices[i] - min);
  }
  let max = prices[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    max = Math.max(max, prices[i]);
    right[i] = Math.max(right[i + 1], max - prices[i]);
  }
  let p = 0;
  for (let i = 0; i < n; i++) {
    p = Math.max(p, left[i] + right[i]);
  }
  return p;
};
