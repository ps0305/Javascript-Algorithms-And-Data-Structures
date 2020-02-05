/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (!board.length || !board[0].length || !word) {
    return false;
  }
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(board, m, n, word, [i, j])) {
        return true;
      }
    }
  }
  return false;
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function dfs(board, m, n, word, [x, y], index = 0, visited = new Set()) {
  const key = encode([x, y]);
  if (!isValid(x, y, m, n) || visited.has(key) || word[index] !== board[x][y]) {
    return false;
  }
  if (index + 1 >= word.length) {
    return true;
  }
  visited.add(key);
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    if (dfs(board, m, n, word, [i, j], index + 1, visited)) {
      return true;
    }
  }
  visited.delete(key);
  return false;
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

function encode(p) {
  return p + '';
}
