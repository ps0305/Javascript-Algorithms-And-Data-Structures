/**
 * @param {number[]} nums
 * @return {boolean}
 */

const helper = (nums, target, start, leftTotal) => {
  if (target <= 0) return target === 0;
  if (leftTotal < target) return false;
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue;
    if (helper(nums, target - nums[i], i + 1, leftTotal - nums[i])) {
      return true;
    }
  }
  return false;
};

var canPartition = function(nums) {
  const total = nums.reduce((acc, cur) => acc + cur, 0);
  if (total % 2 === 1) return false;
  nums.sort();
  return helper(nums, total / 2, 0, total);
};
