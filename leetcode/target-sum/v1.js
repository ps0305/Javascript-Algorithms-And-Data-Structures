/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  const m = nums.length;
  const n = 1000;
  let dp = {};
  dp[nums[0]] = (dp[nums[0]] || 0) + 1;
  dp[-nums[0]] = (dp[-nums[0]] || 0) + 1;
  for (let i = 1; i < m; i++) {
    const next = {};
    for (let j = -n; j <= n; j++) {
      next[j] = (dp[j - nums[i]] || 0) + (dp[j + nums[i]] || 0);
    }
    dp = next;
  }
  return dp[S] || 0;
};
