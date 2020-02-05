/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        max = Math.max(max, helper(grid, m, n, i, j));
      }
    }
  }
  return max;
};

function helper(grid, m, n, x, y, sum = grid[x][y]) {
  const tmp = grid[x][y];
  grid[x][y] = 0;
  let max = sum;
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    if (isValid(m, n, i, j) && grid[i][j] > 0) {
      const val = helper(grid, m, n, i, j, sum + grid[i][j]);
      max = Math.max(max, val);
    }
  }
  grid[x][y] = tmp;
  return max;
}

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
