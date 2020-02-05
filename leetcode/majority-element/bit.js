/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const nBits = 32;
  let output = 0;
  for (let i = 0; i < nBits; i++) {
    if (isMajority(nums, i)) {
      output = output | (1 << i);
    }
  }
  return output;
};

function isMajority(nums, i) {
  const n = nums.length;
  let nOnes = 0;
  for (let j = 0; j < n; j++) {
    nOnes += (nums[j] >> i) & 1;
    if (nOnes > n / 2) {
      return true;
    }
    if (j + 1 - nOnes > n / 2) {
      return false;
    }
  }
}
