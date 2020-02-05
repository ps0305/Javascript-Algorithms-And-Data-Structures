/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let f = 0;
  for (let i = 0; i < nums.length; i++) {
    if (f >= i) {
      f = Math.max(f, i + nums[i]);
    }
  }
  return f >= nums.length - 1;
};
