/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  const m = nums.length;
  let dp = new Map();
  dp.set(nums[0], (dp.get(nums[0]) || 0) + 1);
  dp.set(-nums[0], (dp.get(-nums[0]) || 0) + 1);
  for (let i = 1; i < m; i++) {
    const next = new Map();
    for (const [value, freq] of dp) {
      next.set(value + nums[i], (next.get(value + nums[i]) || 0) + freq);
      next.set(value - nums[i], (next.get(value - nums[i]) || 0) + freq);
    }
    dp = next;
  }
  return dp.get(S) || 0;
};
