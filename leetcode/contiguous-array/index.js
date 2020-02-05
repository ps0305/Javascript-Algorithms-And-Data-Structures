/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  nums = [0, 1, 0, 0, 1, 0]
  sums = [-1, 0, -1, -2, -1, -2]
*/

var findMaxLength = function(nums) {
  const sums = new Map([[0, -1]]);
  let sum = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1;
    if (sums.has(sum)) {
      const index = sums.get(sum) + 1;
      const length = i - index + 1;
      max = Math.max(max, length);
    }
    if (!sums.has(sum)) {
      sums.set(sum, i);
    }
  }
  return max;
};
