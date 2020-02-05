/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(N, mines) {
  const dp = [...new Array(N)].map(() => new Array(N).fill(N));
  for (const [i, j] of mines) {
    dp[i][j] = 0;
  }
  for (let i = 0; i < N; i++) {
    let [left, right] = [0, 0];
    for (let j = 0; j < N; j++) {
      left = !isZero(dp, [i, j]) ? left + 1 : 0;
      dp[i][j] = Math.min(dp[i][j], left);
    }
    for (let j = N - 1; j >= 0; j--) {
      right = !isZero(dp, [i, j]) ? right + 1 : 0;
      dp[i][j] = Math.min(dp[i][j], right);
    }
  }
  for (let j = 0; j < N; j++) {
    let [top, bottom] = [0, 0];
    for (let i = 0; i < N; i++) {
      top = !isZero(dp, [i, j]) ? top + 1 : 0;
      dp[i][j] = Math.min(dp[i][j], top);
    }
    for (let i = N - 1; i >= 0; i--) {
      bottom = !isZero(dp, [i, j]) ? bottom + 1 : 0;
      dp[i][j] = Math.min(dp[i][j], bottom);
    }
  }
  let output = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      output = Math.max(output, dp[i][j]);
    }
  }
  return output;
};

function isZero(dp, [i, j]) {
  return dp[i][j] === 0;
}
