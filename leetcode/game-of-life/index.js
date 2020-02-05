/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  if (!board.length || !board[0].length) {
    return;
  }
  const m = board.length;
  const n = board[0].length;
  const lives = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const { nLives, nDeads } = count(board, [i, j], m, n);
      const isAlive =
        (board[i][j] === 1 && (nLives === 2 || nLives === 3)) ||
        (board[i][j] === 0 && nLives === 3);
      if (isAlive) {
        lives.push([i, j]);
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = 0;
    }
  }
  for (const [i, j] of lives) {
    board[i][j] = 1;
  }
};

const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

function count(board, p, m, n) {
  let nLives = 0;
  for (const [di, dj] of dirs) {
    const i = p[0] + di;
    const j = p[1] + dj;
    if (isValid(i, j, m, n)) {
      nLives += board[i][j] === 1 ? 1 : 0;
    }
  }
  return {
    nLives,
    nDeads: 8 - nLives,
  };
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
