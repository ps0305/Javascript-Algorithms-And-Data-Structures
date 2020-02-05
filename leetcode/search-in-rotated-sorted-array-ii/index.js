/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return true;
    } else if (nums[mid] === nums[right - 1]) {
      right -= 1;
    } else if (nums[left] === nums[mid]) {
      left += 1;
    } else if (
      (nums[mid] < nums[right - 1] && target >= nums[mid] && target <= nums[right - 1]) ||
      (nums[left] < nums[mid] && !(target >= nums[left] && target <= nums[mid]))
    ) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return false;
};
