/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (!nums.length) {
    return 0;
  }
  let n = 1;
  let max = n;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      n += 1;
    } else {
      n = 1;
    }
    max = Math.max(max, n);
  }
  return max;
};
