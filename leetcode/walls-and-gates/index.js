/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  if (!rooms.length || !rooms[0].length) {
    return;
  }
  const m = rooms.length;
  const n = rooms[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === 0) {
        bfs(rooms, { i, j }, m, n);
      }
    }
  }
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function bfs(rooms, position, m, n) {
  const queue = [[position, 0]];
  while (queue.length) {
    const [p, d] = queue.shift();
    for (const [di, dj] of dirs) {
      const i = p.i + di;
      const j = p.j + dj;
      if (isValid(i, j, m, n) && d + 1 < rooms[i][j]) {
        rooms[i][j] = d + 1;
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
