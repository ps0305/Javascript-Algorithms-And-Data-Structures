/* eslint-disable no-constant-condition */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (!nums.length) {
    return 1;
  }
  nums.push(0);
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] !== i && nums[i] >= 0 && nums[i] < n && nums[i] !== nums[nums[i]]) {
      const j = nums[i];
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  let i = 1;
  while (true) {
    if (nums[i] !== i) {
      return i;
    }
    i += 1;
  }
};
