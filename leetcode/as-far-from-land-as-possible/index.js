/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  const m = grid.length;
  const n = m;
  const maxDist = [...new Array(m)].map(() => new Array(n).fill(Infinity));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        bfs(grid, m, n, [i, j], maxDist);
      }
    }
  }
  let max = -Infinity;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        max = Math.max(max, maxDist[i][j]);
      }
    }
  }
  return max > -Infinity && max < Infinity ? max : -1;
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function bfs(grid, m, n, p, maxDist) {
  const dist = [...new Array(m)].map(() => new Array(n).fill(Infinity));
  dist[p[0]][p[1]] = 0;
  const queue = [p];
  while (queue.length) {
    const [x, y] = queue.shift();
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      if (isValid(i, j, m, n) && grid[i][j] === 0 && dist[x][y] + 1 < dist[i][j]) {
        dist[i][j] = dist[x][y] + 1;
        queue.push([i, j]);
        maxDist[i][j] = Math.min(maxDist[i][j], dist[i][j]);
      }
    }
  }
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
