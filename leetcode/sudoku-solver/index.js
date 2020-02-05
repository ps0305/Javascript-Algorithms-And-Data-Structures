/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const m = 9;
const q = 3;
const dot = '.';

var solveSudoku = function(board) {
  if (!board.length || !board[0].length) {
    return;
  }
  const rows = [...new Array(m)].map(() => new Array(m + 1).fill(false));
  const cols = [...new Array(m)].map(() => new Array(m + 1).fill(false));
  const boxes = [...new Array(m)].map(() => new Array(m + 1).fill(false));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] !== dot) {
        const n = parseInt(board[i][j]);
        rows[i][n] = true;
        cols[j][n] = true;
        const b = encodeBoxPosition(i, j);
        boxes[b][n] = true;
      }
    }
  }
  helper(board, 0, 0, rows, cols, boxes);
};

function helper(board, i, j, rows, cols, boxes) {
  if (i >= m || j >= m) {
    return true;
  }
  if (board[i][j] !== dot) {
    return helper(board, ...next(i, j), rows, cols, boxes);
  }
  for (let n = 1; n <= m; n++) {
    if (isValid(board, i, j, rows, cols, boxes, n)) {
      select(board, i, j, rows, cols, boxes, n);
      if (helper(board, ...next(i, j), rows, cols, boxes)) {
        return true;
      }
      deselect(board, i, j, rows, cols, boxes, n);
    }
  }
  return false;
}

function next(i, j) {
  if (j + 1 < m) {
    return [i, j + 1];
  }
  return [i + 1, 0];
}

function isValid(board, i, j, rows, cols, boxes, n) {
  const b = encodeBoxPosition(i, j);
  return !rows[i][n] && !cols[j][n] && !boxes[b][n];
}

function select(board, i, j, rows, cols, boxes, n) {
  board[i][j] = n + '';
  rows[i][n] = true;
  cols[j][n] = true;
  const b = encodeBoxPosition(i, j);
  boxes[b][n] = true;
  return true;
}

function deselect(board, i, j, rows, cols, boxes, n) {
  board[i][j] = dot;
  rows[i][n] = false;
  cols[j][n] = false;
  const b = encodeBoxPosition(i, j);
  boxes[b][n] = false;
  return true;
}

function encodeBoxPosition(i, j) {
  return Math.floor(i / q) * q + Math.floor(j / q);
}
