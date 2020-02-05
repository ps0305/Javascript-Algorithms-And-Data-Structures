/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return dfs(grid, m, n, [i, j]);
      }
    }
  }
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function dfs(grid, m, n, p, sum = 0) {
  grid[p[0]][p[1]] = -1;
  for (const [di, dj] of dirs) {
    const i = p[0] + di;
    const j = p[1] + dj;
    if ((isValid(i, j, m, n) && grid[i][j] === 0) || !isValid(i, j, m, n)) {
      sum += 1;
    }
    if (isValid(i, j, m, n) && grid[i][j] === 1) {
      sum = dfs(grid, m, n, [i, j], sum);
    }
  }
  return sum;
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
