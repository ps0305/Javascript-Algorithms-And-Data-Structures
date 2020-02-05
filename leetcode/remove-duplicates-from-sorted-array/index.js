/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
  let j = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j - 1]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j += 1;
    }
  }
  return j;
};
