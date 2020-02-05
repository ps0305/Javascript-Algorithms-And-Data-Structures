/**
 * @param {number[][]} grid
 * @return {number}
 */

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const isValidIJ = (i, j, m, n) => {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
};

var shortestDistance = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  const visited = [...new Array(m)].map(() => [...new Array(n)].map(() => new Set()));
  const distance = [...new Array(m)].map(() => new Array(n).fill(0));
  const queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const p = n * i + j;
        queue.push([[i, j], 0, p]);
      }
    }
  }
  const nBuildings = queue.length;
  let min = Infinity;
  while (queue.length) {
    const [[i, j], d, p] = queue.shift();
    if (visited[i][j].size >= nBuildings) {
      min = Math.min(min, distance[i][j]);
    }
    for (const [di, dj] of dirs) {
      const y = i + di;
      const x = j + dj;
      if (isValidIJ(y, x, m, n) && grid[y][x] === 0 && !visited[y][x].has(p)) {
        visited[y][x].add(p);
        distance[y][x] += d + 1;
        queue.push([[y, x], d + 1, p]);
      }
    }
  }
  return min < Infinity ? min : -1;
};
