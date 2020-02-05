/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, dfs(grid, m, n, [i, j]));
      }
    }
  }
  return max;
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function dfs(grid, m, n, [x, y]) {
  grid[x][y] = -1;
  let sum = 0;
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    if (isValid(i, j, m, n) && grid[i][j] === 1) {
      sum += dfs(grid, m, n, [i, j]);
    }
  }
  return sum + 1;
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
