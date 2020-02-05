/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const m = nums.length;
  const output = new Array(m).fill(1);
  let p;
  p = nums[0];
  for (let i = 1; i < m; i++) {
    output[i] *= p;
    p *= nums[i];
  }
  p = nums[m - 1];
  for (let i = m - 2; i >= 0; i--) {
    output[i] *= p;
    p *= nums[i];
  }
  return output;
};
