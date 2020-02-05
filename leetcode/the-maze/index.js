/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

var hasPath = function(maze, start, destination) {
  const m = maze.length;
  const n = maze[0].length;
  const queue = [start];
  const visited = new Set();
  while (queue.length) {
    const [x, y] = queue.shift();
    if (x === destination[0] && y === destination[1]) {
      return true;
    }
    for (const [di, dj] of dirs) {
      if (isValid(x + di, y + dj, m, n)) {
        const nextPosition = walk(maze, x, y, di, dj, m, n);
        const key = nextPosition + '';
        if (!visited.has(key)) {
          visited.add(key);
          queue.push(nextPosition);
        }
      }
    }
  }
  return false;
};

function walk(maze, x, y, di, dj, m, n) {
  let i = x;
  let j = y;
  while (isValid(i + di, j + dj, m, n) && maze[i + di][j + dj] === 0) {
    i += di;
    j += dj;
  }
  return [i, j];
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
