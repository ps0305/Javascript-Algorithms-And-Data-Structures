/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
/*
  dp[i][j] = grid[i][j] === 0 ? dp[i - 1][j] + dp[i][j - 1] : 0;
  dp[j] = grid[i][j] === 0 ? dp[j] + dp[j - 1];
*/
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (!obstacleGrid.length || !obstacleGrid[0].length) {
    return 0;
  }
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    dp[0] = (() => {
      if (i === 0) {
        return obstacleGrid[0][0] === 0 ? 1 : 0;
      }
      return obstacleGrid[i][0] === 0 ? dp[0] : 0;
    })();
    for (let j = 1; j < n; j++) {
      dp[j] = obstacleGrid[i][j] === 0 ? dp[j] + dp[j - 1] : 0;
    }
  }
  return dp[n - 1];
};
