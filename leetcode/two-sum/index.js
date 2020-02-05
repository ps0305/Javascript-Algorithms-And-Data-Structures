/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (target - num in map) {
      return [map[target - num], i];
    }
    map[num] = i;
  }
  return [];
};
