/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]);
    if (nums[index - 1] < 0) {
      output.push(index);
    } else {
      nums[index - 1] *= -1;
    }
  }
  return output;
};
