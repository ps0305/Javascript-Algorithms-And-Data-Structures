/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
var shortestDistance = function(maze, start, destination) {
  const m = maze.length;
  const n = maze[0].length;
  const queue = [start];
  const dist = [...new Array(m)].map(() => new Array(n).fill(Infinity));
  dist[start[0]][start[1]] = 0;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (const [di, dj] of dirs) {
      if (isValid(x + di, y + dj, m, n) && maze[x + di][y + dj] === 0) {
        const position = walk(maze, x + di, y + dj, di, dj, m, n);
        const [i, j] = position;
        const deltaDist = Math.abs(x - i) + Math.abs(y - j);
        if (dist[x][y] + deltaDist < dist[i][j]) {
          dist[i][j] = dist[x][y] + deltaDist;
          queue.push([i, j]);
        }
      }
    }
  }
  return dist[destination[0]][destination[1]] < Infinity
    ? dist[destination[0]][destination[1]]
    : -1;
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
