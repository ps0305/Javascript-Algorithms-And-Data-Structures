/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const dist = new Array(k + 1)
    .fill(null)
    .map(() => new Array(m).fill(null).map(() => new Array(n).fill(Infinity)));
  dist[k][0][0] = 0;
  // prettier-ignore
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const queue = [[[0, 0], k]];
  while (queue.length) {
    const [[x, y], r] = queue.shift();
    if (x === m - 1 && y === n - 1) {
      return dist[r][x][y];
    }
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      // prettier-ignore
      const shouldVisit = isValid(m, n, i, j)
        && r - grid[i][j] >= 0
        && dist[r][x][y] + 1 < dist[r - grid[i][j]][i][j];
      if (shouldVisit) {
        dist[r - grid[i][j]][i][j] = dist[r][x][y] + 1;
        queue.push([[i, j], r - grid[i][j]]);
      }
    }
  }
  return -1;
};

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
