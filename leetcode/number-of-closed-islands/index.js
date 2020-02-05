/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
  let nClosed = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0 && !visited[i][j]) {
        if (isClosed(grid, m, n, [i, j], visited)) {
          nClosed += 1;
        }
      }
    }
  }
  return nClosed;
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function isClosed(grid, m, n, [x, y], visited) {
  visited[x][y] = true;
  let result = true;
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    if (isValid(i, j, m, n)) {
      if (!visited[i][j] && grid[i][j] === 0) {
        result = isClosed(grid, m, n, [i, j], visited) && result;
      }
    } else {
      result = false;
    }
  }
  return result;
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
