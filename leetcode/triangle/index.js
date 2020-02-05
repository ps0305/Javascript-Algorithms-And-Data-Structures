/**
 * @param {number[][]} triangle
 * @return {number}
 */

/*
  dp[i][j] = triangle[i][j] + Math.min(dp[i - 1][j - 1], dp[i - 1][j]);
  dp[j] = triangle[i][j] + Math.min(dp[j - 1], dp[j])
*/

var minimumTotal = function(triangle) {
  if (!triangle.length || !triangle[0].length) {
    return 0;
  }
  const m = triangle.length;
  const dp = new Array(m).fill(0);
  dp[0] = triangle[0][0];
  for (let i = 1; i < m; i++) {
    for (let j = triangle[i].length - 1; j >= 0; j--) {
      const left = j - 1 >= 0 ? dp[j - 1] : Infinity;
      const right = j < triangle[i - 1].length ? dp[j] : Infinity;
      dp[j] = triangle[i][j] + Math.min(left, right);
    }
  }
  return Math.min(...dp);
};
