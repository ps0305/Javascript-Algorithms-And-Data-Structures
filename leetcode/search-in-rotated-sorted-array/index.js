/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (
      (nums[right - 1] > nums[mid] && (target >= nums[mid] && target <= nums[right - 1])) ||
      (nums[left] < nums[mid] && !(target >= nums[left] && target <= nums[mid]))
    ) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return -1;
};
