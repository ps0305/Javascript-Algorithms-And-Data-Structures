/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rows[i] = Math.max(rows[i], grid[i][j]);
      cols[j] = Math.max(cols[j], grid[i][j]);
    }
  }
  let sum = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      sum += Math.min(rows[i], cols[j]) - grid[i][j];
    }
  }
  return sum;
};
