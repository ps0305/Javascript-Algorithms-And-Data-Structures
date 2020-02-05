/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
  f(i, j) = Math.min(
    f(i - 1, j) + grid[i][j],
    f(i, j - 1) + grid[i][j],
  )
*/
const minPathSum = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  const arr = new Array(n).fill(Infinity);
  arr[0] = 0;
  for (let i = 0; i < m; i++) {
    arr[0] = arr[0] + grid[i][0];
    for (let j = 1; j < n; j++) {
      arr[j] = Math.min(arr[j] + grid[i][j], arr[j - 1] + grid[i][j]);
    }
  }
  return arr[n - 1];
};

export default minPathSum;
