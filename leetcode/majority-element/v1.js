/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const n = nums.length;
  let output = 0;
  for (let i = 0; i < 32; i++) {
    // prettier-ignore
    const nOnes = nums
      .map(num => (num >> i) & 1)
      .reduce((acc, cur) => acc + cur, 0)
    const isMajority = nOnes > n / 2;
    if (isMajority) {
      output = output | (2 ** i);
    }
  }
  return output;
};
