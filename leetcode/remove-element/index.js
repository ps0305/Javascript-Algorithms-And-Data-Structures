/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j += 1;
    }
  }
  return j;
};
