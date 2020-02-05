/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
  const nPlayers = 2;
  this.n = n;
  this.rows = [...new Array(nPlayers + 1)].map(() => new Array(n).fill(0));
  this.cols = [...new Array(nPlayers + 1)].map(() => new Array(n).fill(0));
  this.dia1 = new Array(nPlayers + 1).fill(0);
  this.dia2 = new Array(nPlayers + 1).fill(0);
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins.
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
  this.rows[player][row] += 1;
  this.cols[player][col] += 1;
  this.dia1[player] += row === col ? 1 : 0;
  this.dia2[player] += row + col === this.n - 1 ? 1 : 0;
  for (let i = 1; i <= 2; i++) {
    const isEnded =
      this.rows[i][row] >= this.n ||
      this.cols[i][col] >= this.n ||
      this.dia1[i] >= this.n ||
      this.dia2[i] >= this.n;
    if (isEnded) {
      return i;
    }
  }
  return 0;
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
