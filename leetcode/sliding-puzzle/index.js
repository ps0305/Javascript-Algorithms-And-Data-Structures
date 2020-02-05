/**
 * @param {number[][]} board
 * @return {number}
 */
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

var slidingPuzzle = function(board) {
  const m = board.length;
  const n = board[0].length;
  const queue = [[board, 0, findZero(board, m, n)]];
  const visited = new Set();
  while (queue.length) {
    const [b, nSteps, [x, y]] = queue.shift();
    if (isSolved(b)) {
      return nSteps;
    }
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      if (isValid(i, j, m, n)) {
        const nextBoard = swap(clone(b), x, y, i, j);
        const key = createKey(nextBoard);
        if (!visited.has(key)) {
          visited.add(key);
          queue.push([nextBoard, nSteps + 1, [i, j]]);
        }
      }
    }
  }
  return -1;
};

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

function createKey(board) {
  return board.map((row) => row.join('')).join('');
}

function clone(data) {
  if (!Array.isArray(data)) {
    return data;
  }
  return data.map((row) => clone(row));
}

function swap(board, x, y, i, j) {
  [board[x][y], board[i][j]] = [board[i][j], board[x][y]];
  return board;
}

function isSolved(board) {
  const key = createKey(board);
  return key === '123450';
}

function findZero(board, m, n) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}
