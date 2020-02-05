/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(board, m, n, i, j, word, 0)) {
        return true;
      }
    }
  }
  return false;
};

const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const visited = '';

function dfs(board, m, n, x, y, word, index) {
  if (index >= word.length) {
    return true;
  }
  if (!isValid(m, n, x, y) || board[x][y] === visited || board[x][y] !== word[index]) {
    return false;
  }
  const tmp = board[x][y];
  board[x][y] = visited;
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    if (dfs(board, m, n, i, j, word, index + 1)) {
      return true;
    }
  }
  board[x][y] = tmp;
  return false;
}

function isValid(m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
