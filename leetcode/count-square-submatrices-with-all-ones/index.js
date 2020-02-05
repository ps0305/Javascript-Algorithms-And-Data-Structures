/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let dp = matrix[0].slice();
  let sum = dp.reduce((acc, cur) => acc + cur, 0);
  for (let i = 1; i < m; i++) {
    const next = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
      next[j] = helper({ matrix, dp, next, i, j });
      sum += next[j];
    }
    dp = next;
  }
  return sum;
};

function helper({ matrix, dp, next, i, j }) {
  if (matrix[i][j] > 0) {
    return 1 + Math.min(j - 1 >= 0 ? next[j - 1] : 0, dp[j], j - 1 >= 0 ? dp[j - 1] : 0);
  }
  return 0;
}
