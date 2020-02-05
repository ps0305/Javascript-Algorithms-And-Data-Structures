/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
  if (!grid.length || !grid[0].length) {
    return -1;
  }
  const m = grid.length;
  const n = grid[0].length;
  const distance = [...new Array(m)].map(() => new Array(n).fill(0));
  let target = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        bfs(grid, { i, j }, m, n, distance, target);
        target -= 1;
      }
    }
  }
  let min = Infinity;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === target) {
        min = Math.min(min, distance[i][j]);
      }
    }
  }
  return min < Infinity ? min : -1;
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function bfs(grid, position, m, n, distance, target) {
  const queue = [[position, 0]];
  while (queue.length) {
    const [p, d] = queue.shift();
    for (const [di, dj] of dirs) {
      const i = p.i + di;
      const j = p.j + dj;
      if (isValid(i, j, m, n) && grid[i][j] === target) {
        grid[i][j] -= 1;
        distance[i][j] += d + 1;
        queue.push([{ i, j }, d + 1]);
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
