/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const m = nums.length;
  const dp = new Array(m).fill(null).map(() => ({ length: 1, count: 1 }));
  let max = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j].length + 1 > dp[i].length) {
          dp[i].length = dp[j].length + 1;
          dp[i].count = dp[j].count;
        } else if (dp[j].length + 1 === dp[i].length) {
          dp[i].count += dp[j].count;
        }
      }
    }
    max = Math.max(max, dp[i].length);
  }
  return dp.reduce((acc, cur) => acc + (cur.length === max ? cur.count : 0), 0);
};
