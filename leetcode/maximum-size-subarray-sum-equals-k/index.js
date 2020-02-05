/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
  const map = { 0: -1 };
  let max = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum - k in map) {
      max = Math.max(max, i - map[sum - k]);
    }
    if (!(sum in map)) {
      map[sum] = i;
    }
  }
  return max;
};
