/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */

const constants = {
  mine: 'M',
  empty: 'E',
  blank: 'B',
  revealedMine: 'X',
};

var updateBoard = function(board, click) {
  const [i, j] = click;
  if (board[i][j] === constants.mine) {
    board[i][j] = constants.revealedMine;
    return board;
  }
  const m = board.length;
  const n = board[0].length;
  dfs(board, m, n, click);
  return board;
};

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1], [-1, 1], [-1, -1], [1, 1], [1, -1]];

function dfs(board, m, n, p) {
  const [x, y] = p;
  const nMines = count(board, m, n, p);
  board[x][y] = nMines > 0 ? nMines + '' : constants.blank;
  if (board[x][y] === constants.blank) {
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      if (isValid(i, j, m, n) && board[i][j] === constants.empty) {
        dfs(board, m, n, [i, j]);
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

function count(board, m, n, [x, y]) {
  let nMines = 0;
  for (const [di, dj] of dirs) {
    const i = x + di;
    const j = y + dj;
    if (isValid(i, j, m, n) && board[i][j] === constants.mine) {
      nMines += 1;
    }
  }
  return nMines;
}
