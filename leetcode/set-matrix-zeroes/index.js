/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const marker = null;

var setZeroes = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        mark(matrix, i, j, m, n);
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === marker) {
        matrix[i][j] = 0;
      }
    }
  }
};

function mark(matrix, y, x, m, n) {
  for (let i = 0; i < m; i++) {
    if (matrix[i][x] !== 0) {
      matrix[i][x] = marker;
    }
  }
  for (let j = 0; j < n; j++) {
    if (matrix[y][j] !== 0) {
      matrix[y][j] = marker;
    }
  }
}
