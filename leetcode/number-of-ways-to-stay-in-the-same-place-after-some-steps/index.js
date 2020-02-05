/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
const M = 10 ** 9 + 7;

var numWays = function(steps, arrLen) {
  const n = steps;
  const m = arrLen;
  let dp = new Array(m).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    const next = new Array(m).fill(0);
    const max = Math.min(i + 1, m);
    for (let j = 0; j < max; j++) {
      const val = dp[j] + (j - 1 >= 0 ? dp[j - 1] : 0) + (j + 1 < m ? dp[j + 1] : 0);
      next[j] = val % M;
    }
    dp = next;
  }
  return dp[0];
};
