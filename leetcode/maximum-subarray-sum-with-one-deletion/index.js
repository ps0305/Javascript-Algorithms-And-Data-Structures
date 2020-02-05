/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
  const m = arr.length;
  let dp = [-Infinity, -Infinity];
  let max = -Infinity;
  for (let i = 1; i <= m; i++) {
    const next = [0, 0];
    next[0] = Math.max(arr[i - 1] + dp[0], arr[i - 1]);
    next[1] = Math.max(arr[i - 1] + dp[1], arr[i - 1], dp[0]);
    dp = next;
    max = Math.max(max, ...dp);
  }
  return max;
};
