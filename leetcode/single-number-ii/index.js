/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let output = 0;
  for (let i = 0; i < 32; i++) {
    const sum = nums.reduce((acc, cur, j) => acc + ((cur >> i) & 1), 0);
    output = output | (sum % 3 << i);
  }
  return output;
};
