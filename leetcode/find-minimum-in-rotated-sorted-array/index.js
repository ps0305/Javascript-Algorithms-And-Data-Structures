/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[right] >= nums[left]) {
      right = left;
    } else if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};
