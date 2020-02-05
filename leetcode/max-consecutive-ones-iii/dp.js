/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
/*
  dp[k][i] = (A[i] === 1 ? dp[k][i - 1] : dp[k - 1][i - 1]) + 1;
  next[i] = (A[i] === 1 ? next[i - 1] : dp[i - 1]) + 1;
*/
var longestOnes = function(A, K) {
  const m = A.length;
  let dp = new Array(m).fill(0);
  let max = 0;
  dp[0] = A[0];
  max = Math.max(max, dp[0]);
  for (let i = 1; i < m; i++) {
    dp[i] = A[i] === 1 ? dp[i - 1] + 1 : 0;
    max = Math.max(max, dp[i]);
  }
  for (let k = 1; k <= K; k++) {
    const next = new Array(m).fill(0);
    next[0] = 1;
    for (let i = 1; i < m; i++) {
      next[i] = (A[i] === 1 ? next[i - 1] : dp[i - 1]) + 1;
      max = Math.max(max, next[i]);
    }
    dp = next;
  }
  return max;
};
