/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
  const n = colsum.length;
  const matrix = new Array(2).fill(null).map(() => new Array(n).fill(0));
  let top = 0;
  let bottom = 0;
  for (let j = 0; j < n; j++) {
    if (colsum[j] === 2) {
      matrix[0][j] = 1;
      matrix[1][j] = 1;
    } else if (colsum[j] === 0) {
      matrix[0][j] = 0;
      matrix[1][j] = 0;
    }
    top += matrix[0][j];
    bottom += matrix[1][j];
  }
  for (let j = 0; j < n; j++) {
    if (colsum[j] === 1) {
      matrix[0][j] = top + 1 <= upper ? 1 : 0;
      matrix[1][j] = colsum[j] - matrix[0][j];
      top += matrix[0][j];
      bottom += matrix[1][j];
    }
    if (top > upper || bottom > lower) {
      return [];
    }
  }
  return top === upper && bottom === lower ? matrix : [];
};
