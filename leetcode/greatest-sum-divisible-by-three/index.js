/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
  const m = 3;
  let dp = new Array(m).fill(0);
  for (let i = 0; i < nums.length; i++) {
    const next = [...dp];
    for (let j = 0; j < m; j++) {
      const r = (nums[i] + dp[j]) % m;
      next[r] = Math.max(next[r], nums[i] + dp[j]);
    }
    dp = next;
  }
  return dp[0];
};
