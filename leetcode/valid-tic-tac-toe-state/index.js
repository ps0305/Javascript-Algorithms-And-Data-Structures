/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
  const m = board.length;
  const n = board[0].length;
  const mark1 = 'X';
  const mark2 = 'O';
  const n1 = count(board, m, n, mark1);
  const n2 = count(board, m, n, mark2);
  const sum = n1 + n2;
  if (n1 - n2 > 1 || n1 - n2 < 0 || (sum % 2 === 1 && n1 <= n2)) {
    return false;
  }
  const isP1Win = isWinnerOf(board, m, n, mark1);
  const isP2Win = isWinnerOf(board, m, n, mark2);
  if (isP1Win && isP2Win) {
    return false;
  }
  if (isP1Win && !(n1 > n2)) {
    return false;
  }
  if (isP2Win && !(n1 === n2)) {
    return false;
  }
  return true;
};

function isWinnerOf(board, m, n, target) {
  let nWins = 0;
  for (let i = 0; i < m; i++) {
    if (board[i][0] === target && board[i][1] === target && board[i][2] === target) {
      nWins += 1;
    }
  }
  for (let j = 0; j < n; j++) {
    if (board[0][j] === target && board[1][j] === target && board[2][j] === target) {
      nWins += 1;
    }
  }
  if (board[0][0] === target && board[1][1] === target && board[2][2] === target) {
    nWins += 1;
  }
  if (board[2][0] === target && board[1][1] === target && board[0][2] === target) {
    nWins += 1;
  }
  return nWins >= 1;
}

function count(board, m, n, target) {
  let output = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      output += board[i][j] === target ? 1 : 0;
    }
  }
  return output;
}
