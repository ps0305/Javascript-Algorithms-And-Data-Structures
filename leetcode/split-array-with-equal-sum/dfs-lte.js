/**
 * @param {number[]} nums
 * @return {boolean}
 */

const dfs = (sums, nums, start, target, depth) => {
  if (start >= sums.length) {
    return depth === 4 && sums.length === start - 1;
  }
  for (let i = start; i + 5 - depth * 2 < sums.length; i++) {
    if (nums[i] === 0 && nums[i + 1] === 0) continue;
    const sum = sums[i] - sums[start - 1];
    if (sum === target && dfs(sums, nums, i + 2, target, depth + 1)) {
      return true;
    }
  }
  return false;
};

var splitArray = function(nums) {
  const sums = new Array(nums.length).fill(0);
  sums[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sums[i] = sums[i - 1] + nums[i];
  }
  for (let i = 0; i + 5 < nums.length; i++) {
    if (nums[i] === 0 && nums[i + 1] === 0) continue;
    if (dfs(sums, nums, i + 2, sums[i], 1)) {
      return true;
    }
  }
  return false;
};
