/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return 0;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const memo = {};
  let max = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const result = helper(matrix, m, n, [i, j], memo);
      max = Math.max(max, result);
    }
  }
  return max;
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function helper(matrix, m, n, [x, y], memo) {
  const key = createKey(x, y, m, n);
  if (key in memo) {
    return memo[key];
  }
  let max = 1;
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    if (isValid(i, j, m, n) && matrix[i][j] > matrix[x][y]) {
      const result = helper(matrix, m, n, [i, j], memo);
      max = Math.max(max, result + 1);
    }
  }
  memo[key] = max;
  return memo[key];
}

function createKey(i, j, m, n) {
  return n * i + j;
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
