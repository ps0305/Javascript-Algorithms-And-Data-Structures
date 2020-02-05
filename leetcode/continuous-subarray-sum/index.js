/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0 && nums[i + 1] === 0) {
      return true;
    }
  }
  if (!k) {
    return false;
  }
  const map = { 0: -1 };
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const r = sum % k;
    if (r in map && i - map[r] > 1) {
      return true;
    }
    if (!(r in map)) {
      map[r] = i;
    }
  }
  return false;
};
