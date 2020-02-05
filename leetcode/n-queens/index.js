/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const combinations = helper(n);
  return createBoards(n, combinations);
};

function helper(n, i = 0, selected = [], output = []) {
  if (i >= n) {
    output.push([...selected]);
    return output;
  }
  for (let j = 0; j < n; j++) {
    if (isSelectable(selected, i, j)) {
      selected.push([i, j]);
      helper(n, i + 1, selected, output);
      selected.pop();
    }
  }
  return output;
}

function isSelectable(selected, i, j) {
  for (const [x, y] of selected) {
    if (x === i || y === j) {
      return false;
    }
    const slope = (y - j) / (x - i);
    if (slope === 1 || slope === -1) {
      return false;
    }
  }
  return true;
}

function createBoards(n, combinations) {
  const output = [];
  for (const queens of combinations) {
    const board = [...new Array(n)].map(() => new Array(n).fill('.'));
    for (const [i, j] of queens) {
      board[i][j] = 'Q';
    }
    output.push(board.map((row) => row.join('')));
  }
  return output;
}
