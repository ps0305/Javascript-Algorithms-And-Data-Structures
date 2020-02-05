/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = [...new Array(m)].map(() => new Array(n).fill(Infinity));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = Math.min(
        matrix[i][j] === 0 ? 0 : Infinity,
        dp[i][j],
        i - 1 >= 0 ? dp[i - 1][j] + 1 : Infinity,
        j - 1 >= 0 ? dp[i][j - 1] + 1 : Infinity,
      );
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dp[i][j] = Math.min(
        matrix[i][j] === 0 ? 0 : Infinity,
        dp[i][j],
        i + 1 < m ? dp[i + 1][j] + 1 : Infinity,
        j + 1 < n ? dp[i][j + 1] + 1 : Infinity,
      );
    }
  }
  return dp;
};
