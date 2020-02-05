/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S, i = 0, sum = 0) {
  if (i >= nums.length) {
    return sum === S ? 1 : 0;
  }
  return (
    findTargetSumWays(nums, S, i + 1, sum + nums[i]) +
    findTargetSumWays(nums, S, i + 1, sum - nums[i])
  );
};
