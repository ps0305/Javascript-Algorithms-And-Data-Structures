/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
  let maxSoFar = 1;
  let minSoFar = 1;
  let max = -Infinity;
  for (const n of nums) {
    [maxSoFar, minSoFar] = [
      Math.max(n, n * maxSoFar, n * minSoFar),
      Math.min(n, n * maxSoFar, n * minSoFar),
    ];
    max = Math.max(max, maxSoFar);
  }
  return max;
};
