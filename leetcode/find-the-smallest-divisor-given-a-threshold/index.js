/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
  nums.sort((a, b) => a - b);
  let left = 1;
  let right = nums[nums.length - 1];
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (isGreater(nums, mid, threshold)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

function isGreater(nums, divisor, threshold) {
  let sum = 0;
  for (const num of nums) {
    sum += Math.ceil(num / divisor);
    if (sum > threshold) {
      return true;
    }
  }
  return false;
}
