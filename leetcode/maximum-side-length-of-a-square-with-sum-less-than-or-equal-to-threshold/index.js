/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
  const m = mat.length;
  const n = mat[0].length;
  const prefixSum = createPrefixSum(mat, m, n);
  let left = 1;
  let right = Math.min(m, n) + 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (isValid(mat, m, n, prefixSum, mid, threshold)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left - 1;
};

function isValid(mat, m, n, prefixSum, length, threshold) {
  for (let i = 0; i <= m - length; i++) {
    for (let j = 0; j <= n - length; j++) {
      const x = i + length - 1;
      const y = j + length - 1;
      // prettier-ignore
      const sum = prefixSum[x][y]
        - (i - 1 >= 0 ? prefixSum[i - 1][y] : 0)
        - (j - 1 >= 0 ? prefixSum[x][j - 1] : 0)
        + (i - 1 >= 0 && j - 1 >= 0 ? prefixSum[i - 1][j - 1] : 0);
      if (sum <= threshold) {
        return true;
      }
    }
  }
  return false;
}

function createPrefixSum(matrix, m, n) {
  const prefixSum = new Array(m).fill(null).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // prettier-ignore
      prefixSum[i][j] = matrix[i][j]
        + (i - 1 >= 0 ? prefixSum[i - 1][j] : 0)
        + (j - 1 >= 0 ? prefixSum[i][j - 1] : 0)
        - (i - 1 >= 0 && j - 1 >= 0 ? prefixSum[i - 1][j - 1] : 0);
    }
  }
  return prefixSum;
}
