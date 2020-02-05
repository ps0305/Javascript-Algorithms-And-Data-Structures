/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length || !matrix[0].length) {
    return false;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  let i = 0;
  let j = n - 1;
  while (i >= 0 && i < m && j >= 0 && j < n) {
    if (target === matrix[i][j]) {
      return true;
    } else if (target > matrix[i][j]) {
      i += 1;
    } else if (target < matrix[i][j]) {
      j -= 1;
    }
  }
  return false;
};
