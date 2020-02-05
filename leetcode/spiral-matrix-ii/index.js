/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const matrix = [...new Array(n)].map(() => new Array(n).fill(0));
  let [top, right, bottom, left] = [0, n - 1, n - 1, 0];
  let k = 1;
  while (isValid(top, right, bottom, left)) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = k;
      k += 1;
    }
    top += 1;
    if (!isValid(top, right, bottom, left)) break;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = k;
      k += 1;
    }
    right -= 1;
    if (!isValid(top, right, bottom, left)) break;

    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = k;
      k += 1;
    }
    bottom -= 1;
    if (!isValid(top, right, bottom, left)) break;

    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = k;
      k += 1;
    }
    left += 1;
    if (!isValid(top, right, bottom, left)) break;
  }
  return matrix;
};

function isValid(top, right, bottom, left) {
  if (left > right || top > bottom) {
    return false;
  }
  return true;
}
