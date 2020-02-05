/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[left] < nums[right]) {
      right = left;
    } else if (nums[mid] > nums[left]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left += 1;
    }
  }
  return nums[left];
};
