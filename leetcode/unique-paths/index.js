/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dp = new Array(m).fill(1);
  for (let i = 1; i < n; i++) {
    const next = new Array(m).fill(1);
    for (let j = 0; j < m; j++) {
      next[j] = dp[j] + (j - 1 >= 0 ? next[j - 1] : 0);
    }
    dp = next;
  }
  return dp[m - 1];
};
