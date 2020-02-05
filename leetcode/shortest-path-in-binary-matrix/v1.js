/**
 * @param {number[][]} grid
 * @return {number}
 */
const dirs = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];

var shortestPathBinaryMatrix = function(grid) {
  if (grid[0][0]) {
    return -1;
  }
  const n = grid.length;
  const visited = new Set();
  const queue = [[[0, 0], 1]];
  while (queue.length) {
    const [[x, y], d] = queue.shift();
    if (x === n - 1 && y === n - 1) {
      return d;
    }
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      const key = encode([i, j]);
      if (isValid(i, j, n) && grid[i][j] === 0 && !visited.has(key)) {
        queue.push([[i, j], d + 1]);
        visited.add(key);
      }
    }
  }
  return -1;
};

function isValid(i, j, n) {
  if (i < 0 || i >= n || j < 0 || j >= n) {
    return false;
  }
  return true;
}

function encode(position) {
  return position + '';
}
