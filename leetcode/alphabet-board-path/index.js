/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
  const board = ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'z'];
  const map = {};
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      map[board[i][j]] = [i, j];
    }
  }
  const p = [0, 0];
  let output = '';
  for (const c of target) {
    const [i, j] = map[c];
    const delta = [i - p[0], j - p[1]];
    output +=
      (isValid(board, i, p[1])
        ? move(delta[0], 'vertical') + move(delta[1], 'horizontal')
        : move(delta[1], 'horizontal') + move(delta[0], 'vertical')) + '!';
    p[0] = i;
    p[1] = j;
  }
  return output;
};

function move(delta, dir) {
  const nTimes = Math.abs(delta);
  if (delta === 0) {
    return '';
  } else if (dir === 'vertical') {
    if (delta > 0) {
      return 'D'.repeat(nTimes);
    }
    return 'U'.repeat(nTimes);
  } else if (dir === 'horizontal') {
    if (delta > 0) {
      return 'R'.repeat(nTimes);
    }
    return 'L'.repeat(nTimes);
  }
}

function isValid(board, i, j) {
  return i < board.length && j < board[i].length;
}
