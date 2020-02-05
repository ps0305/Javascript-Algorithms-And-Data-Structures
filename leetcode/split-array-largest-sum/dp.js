/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
/*
  dp[i][j] = (() => {
    let min = Infinity;
    for (let k = 1; k < j; k++) {
      const max = Math.max(dp[i - 1][j - k], sum(nums, j - k, j));
      min = Math.min(min, max);
    }
    return min;
  })();
*/
var splitArray = function(nums, m) {
  const n = nums.length;
  const dp = [...new Array(m + 1)].map(() => new Array(n + 1).fill(0));
  const sum = createSum(nums, n);
  dp[1][0] = 0;
  for (let j = 1; j <= n; j++) {
    dp[1][j] = dp[1][j - 1] + nums[j - 1];
  }
  for (let i = 2; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = (() => {
        let min = Infinity;
        for (let k = 1; k < j; k++) {
          const max = Math.max(dp[i - 1][j - k], sum[j - 1] - sum[j - k - 1]);
          min = Math.min(min, max);
        }
        return min;
      })();
    }
  }
  return dp[m][n];
};

function createSum(arr, n) {
  const sum = new Array(n).fill(0);
  sum[0] = arr[0];
  for (let i = 1; i < n; i++) {
    sum[i] = sum[i - 1] + arr[i];
  }
  return sum;
}
