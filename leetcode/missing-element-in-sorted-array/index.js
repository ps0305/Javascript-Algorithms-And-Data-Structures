/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
  let target = k;
  let left = 0;
  let right = nums.length;
  while (right - left >= 2) {
    const mid = Math.floor((left + right) / 2);
    const nLeftMissing = nums[mid] - nums[left] + 1 - (mid - left + 1);
    if (target > nLeftMissing) {
      left = mid;
      target -= nLeftMissing;
    } else {
      right = mid;
    }
  }
  return nums[left] + target;
};
