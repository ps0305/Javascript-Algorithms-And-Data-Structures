/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const output = [];
  let [top, right, bottom, left] = [0, n - 1, m - 1, 0];
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      output.push(matrix[top][i]);
    }
    top += 1;
    if (!isValid(top, right, bottom, left)) break;

    for (let i = top; i <= bottom; i++) {
      output.push(matrix[i][right]);
    }
    right -= 1;
    if (!isValid(top, right, bottom, left)) break;

    for (let i = right; i >= left; i--) {
      output.push(matrix[bottom][i]);
    }
    bottom -= 1;
    if (!isValid(top, right, bottom, left)) break;

    for (let i = bottom; i >= top; i--) {
      output.push(matrix[i][left]);
    }
    left += 1;
    if (!isValid(top, right, bottom, left)) break;
  }
  return output;
};

function isValid(top, right, bottom, left) {
  if (left > right || top > bottom) {
    return false;
  }
  return true;
}
