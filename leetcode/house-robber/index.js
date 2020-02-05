/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length <= 2) {
    return Math.max(...nums, 0);
  }
  let x = nums[0];
  let y = Math.max(x, nums[1]);
  let dp = y;
  for (let i = 2; i < nums.length; i++) {
    dp = Math.max(y, x + nums[i]);
    x = y;
    y = dp;
  }
  return dp;
};
