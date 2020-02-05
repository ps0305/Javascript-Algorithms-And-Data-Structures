/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

const dfs = (nums, start, sum, target, visited, k) => {
  if (sum > target) {
    return false;
  }
  if (sum === target) {
    if (k - 1 === 0) {
      return true;
    }
    return dfs(nums, 0, 0, target, visited, k - 1);
  }
  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    if (dfs(nums, i + 1, sum + nums[i], target, visited, k)) {
      return true;
    }
    visited[i] = false;
  }
  return false;
};

var canPartitionKSubsets = function(nums, k) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  if (sum % k) return false;
  const target = sum / k;
  const max = nums.reduce((acc, cur) => Math.max(acc, cur), -Infinity);
  if (max > target) return false;
  nums.sort();
  const visited = new Array(nums.length).fill(false);
  return dfs(nums, 0, 0, target, visited, k);
};
