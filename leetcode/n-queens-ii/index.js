/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n, selected = [], output = 0) {
  if (selected.length >= n) {
    output += 1;
    return output;
  }
  for (let j = 0; j < n; j++) {
    const i = selected.length;
    if (isValid([i, j], selected)) {
      selected.push([i, j]);
      output = totalNQueens(n, selected, output);
      selected.pop();
    }
  }
  return output;
};

function isValid(p, selected) {
  for (const q of selected) {
    if (p[0] === q[0] || p[1] === q[1] || Math.abs(p[0] - q[0]) === Math.abs(p[1] - q[1])) {
      return false;
    }
  }
  return true;
}

function transform(n, selected) {
  const output = [...new Array(n)].map(() => new Array(n).fill('.'));
  for (const [i, j] of selected) {
    output[i][j] = 'Q';
  }
  return output.map((row) => row.join(''));
}
