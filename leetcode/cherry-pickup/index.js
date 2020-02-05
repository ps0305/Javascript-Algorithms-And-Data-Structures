/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
  const n = grid.length;
  const dp = [...new Array(n)].map(() =>
    [...new Array(n)].map(() => [...new Array(n).fill(-Infinity)]),
  );
  dp[0][0][0] = grid[0][0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let x = 0; x < n; x++) {
        const y = i + j - x;
        const isValid =
          !(grid[i][j] === -1 || grid[x][y] === -1) && y >= 0 && y < n && dp[i][j][x] < 0;
        if (isValid) {
          const max = Math.max(
            get(dp, n, i - 1, j, x - 1),
            get(dp, n, i - 1, j, x),
            get(dp, n, i, j - 1, x),
            get(dp, n, i, j - 1, x - 1),
          );
          if (max >= 0) {
            dp[i][j][x] = max + (!(i === x && j === y) ? grid[i][j] + grid[x][y] : grid[i][j]);
          }
        }
      }
    }
  }
  return dp[n - 1][n - 1][n - 1] > 0 ? dp[n - 1][n - 1][n - 1] : 0;
};

function get(dp, n, i, j, x, defaultVal = -Infinity) {
  if (i < 0 || i >= n || j < 0 || j >= n || x < 0 || x >= n) {
    return defaultVal;
  }
  return dp[i][j][x];
}
