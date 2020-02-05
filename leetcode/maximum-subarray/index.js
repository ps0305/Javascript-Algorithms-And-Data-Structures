/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = -Infinity;
  let maxSoFar = max;
  for (const n of nums) {
    maxSoFar = Math.max(maxSoFar + n, n);
    max = Math.max(max, maxSoFar);
  }
  return max;
};
