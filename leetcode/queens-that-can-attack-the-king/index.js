/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
const dirs = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];

var queensAttacktheKing = function(queens, king) {
  const n = 8;
  const set = createSet(queens, n);
  const queue = [];
  for (const [di, dj] of dirs) {
    queue.push([[king[0] + di, king[1] + dj], [di, dj]]);
  }
  const output = [];
  while (queue.length) {
    const [[x, y], [di, dj]] = queue.shift();
    if (isValid(x, y, n)) {
      if (set.has(createKey(x, y, n))) {
        output.push([x, y]);
      } else {
        const i = x + di;
        const j = y + dj;
        queue.push([[i, j], [di, dj]]);
      }
    }
  }
  return output;
};

function createSet(positions, n) {
  const set = new Set();
  for (const position of positions) {
    set.add(createKey(...position, n));
  }
  return set;
}

function createKey(i, j, n) {
  return n * i + j;
}

function isValid(i, j, n) {
  if (i < 0 || i >= n || j < 0 || j >= n) {
    return false;
  }
  return true;
}
