/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let pre = -1;
  let cur = 0;
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      cur += 1;
    } else {
      pre = cur;
      cur = 0;
    }
    max = Math.max(max, pre + 1 + cur);
  }
  return max;
};
