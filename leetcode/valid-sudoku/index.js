/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const n = 9;
  const m = 3;
  const rows = [...new Array(n)].map(() => ({}));
  const columns = [...new Array(n)].map(() => ({}));
  const boxes = [...new Array(n)].map(() => ({}));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '.') continue;
      const num = parseInt(board[i][j]);
      const p = m * Math.floor(i / m) + Math.floor(j / m);
      if (num in rows[i] || num in columns[j] || num in boxes[p]) {
        return false;
      }
      rows[i][num] = true;
      columns[j][num] = true;
      boxes[p][num] = true;
    }
  }
  return true;
};
