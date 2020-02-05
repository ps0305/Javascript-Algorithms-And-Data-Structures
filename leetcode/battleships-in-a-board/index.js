/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  const m = board.length;
  const n = board[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      count += isShipHead(board, i, j) ? 1 : 0;
    }
  }
  return count;
};

function isShipHead(board, i, j) {
  if (board[i][j] === 'X') {
    // prettier-ignore
    return (i - 1 < 0 || board[i - 1][j] === '.')
      && (j - 1 < 0 || board[i][j - 1] === '.');
  }
  return false;
}
