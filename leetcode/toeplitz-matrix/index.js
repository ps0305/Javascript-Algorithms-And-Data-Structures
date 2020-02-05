/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    if (!helper(matrix, m, n, i, 0)) {
      return false;
    }
  }
  for (let j = 0; j < n; j++) {
    if (!helper(matrix, m, n, 0, j)) {
      return false;
    }
  }
  return true;
};

function helper(matrix, m, n, x, y) {
  let i = x + 1;
  let j = y + 1;
  while (i < m && j < n) {
    if (matrix[i][j] !== matrix[i - 1][j - 1]) {
      return false;
    }
    i += 1;
    j += 1;
  }
  return true;
}
