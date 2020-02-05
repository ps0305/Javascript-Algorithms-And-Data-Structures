/**
 * @param {number[][]} grid
 * @return {number}
 */
const dirs = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];

var shortestPathBinaryMatrix = function(grid) {
  const n = grid.length;
  if (grid[0][0] || grid[n - 1][n - 1]) {
    return -1;
  }
  const visited = [...new Array(n)].map(() => new Array(false));
  let queue = [[0, 0]];
  let length = 1;
  while (queue.length) {
    const next = [];
    while (queue.length) {
      const [x, y] = queue.shift();
      if (x === n - 1 && y === n - 1) {
        return length;
      }
      for (const [di, dj] of dirs) {
        const i = x + di;
        const j = y + dj;
        if (isValid(i, j, n) && grid[i][j] === 0 && !visited[i][j]) {
          next.push([i, j]);
          visited[i][j] = true;
        }
      }
    }
    length += 1;
    queue = next;
  }
  return -1;
};

function isValid(i, j, n) {
  if (i < 0 || i >= n || j < 0 || j >= n) {
    return false;
  }
  return true;
}
