/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let nConsecutiveOnes = nums[0];
  let max = nConsecutiveOnes;
  for (let i = 1; i < nums.length; i++) {
    nConsecutiveOnes = nums[i] + (nums[i] === 1 && nums[i - 1] === 1 ? nConsecutiveOnes : 0);
    max = Math.max(max, nConsecutiveOnes);
  }
  return max;
};
