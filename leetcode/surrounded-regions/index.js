/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
const createBorders = (m, n) => [[m - 1, 0], [0, 0], [0, n - 1], [m - 1, n - 1]];

var solve = function(board) {
  if (!board.length || !board[0].length) {
    return;
  }
  const m = board.length;
  const n = board[0].length;
  flipBorders(board, m, n, 'O', '1');
  flipBody(board, m, n, 'O', 'X');
  flipBorders(board, m, n, '1', 'O');
};

function flipBody(board, m, n, from, to) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === from) {
        dfs(board, m, n, [i, j], from, to);
      }
    }
  }
}

function flipBorders(board, m, n, from, to) {
  const borders = createBorders(m, n);
  for (let k = 0; k < 4; k++) {
    const [di, dj] = dirs[k];
    let [i, j] = borders[k];
    while (isValid(i, j, m, n)) {
      if (board[i][j] === from) {
        dfs(board, m, n, [i, j], from, to);
      }
      i += di;
      j += dj;
    }
  }
}

function dfs(board, m, n, p, from, to) {
  board[p[0]][p[1]] = to;
  for (const [di, dj] of dirs) {
    const i = p[0] + di;
    const j = p[1] + dj;
    if (isValid(i, j, m, n) && board[i][j] === from) {
      dfs(board, m, n, [i, j], from, to);
    }
  }
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}
