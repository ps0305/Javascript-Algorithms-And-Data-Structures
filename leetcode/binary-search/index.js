/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    let m = Math.floor((i + j) / 2);
    if (target === nums[m]) {
      return m;
    } else if (target > nums[m]) {
      i = m + 1;
    } else if (target < nums[m]) {
      j = m - 1;
    }
  }
  return -1;
};

export default search;
