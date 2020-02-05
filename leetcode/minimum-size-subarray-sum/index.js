/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let start = 0;
  let sum = 0;
  let output = Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= s) {
      output = Math.min(output, i - start + 1);
      sum -= nums[start];
      start += 1;
    }
  }
  return output < Infinity ? output : 0;
};
