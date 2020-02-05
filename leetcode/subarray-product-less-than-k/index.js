/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) {
    return 0;
  }
  let start = 0;
  let product = 1;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
    while (product >= k) {
      product /= nums[start];
      start += 1;
    }
    count += i - start + 1;
  }
  return count;
};
