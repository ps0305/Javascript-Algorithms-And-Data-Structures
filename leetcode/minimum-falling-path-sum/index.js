/**
 * @param {number[][]} A
 * @return {number}
 */

var minFallingPathSum = function(A) {
  const m = A.length;
  const n = m;
  let dp = [...A[0]];
  for (let i = 1; i < m; i++) {
    const next = new Array(n).fill(null);
    for (let j = 0; j < n; j++) {
      const left = j - 1 >= 0 ? dp[j - 1] : Infinity;
      const middle = dp[j];
      const right = j + 1 < n ? dp[j + 1] : Infinity;
      next[j] = A[i][j] + Math.min(left, middle, right);
    }
    dp = next;
  }
  return Math.min(...dp);
};
