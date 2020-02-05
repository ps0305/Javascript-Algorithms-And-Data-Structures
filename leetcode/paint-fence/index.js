/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
  const dp = [0, k, k * k];
  if (n <= 2) {
    return dp[n];
  }
  for (let i = 3; i <= n; i++) {
    const result = dp[1] * (k - 1) + dp[2] * (k - 1);
    [dp[0], dp[1], dp[2]] = [dp[1], dp[2], result];
  }
  return dp[2];
};
