/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const rows = [];
  const cols = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        rows.push(i);
        cols.push(j);
      }
    }
  }
  cols.sort((a, b) => a - b);
  return distance(rows) + distance(cols);
};

function distance(arr) {
  const mid = Math.floor(arr.length / 2);
  // prettier-ignore
  return arr
    .map((i) => Math.abs(arr[mid] - i))
    .reduce((acc, cur) => acc + cur, 0);
}
