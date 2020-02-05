/**
 * @param {number[]} nums
 * @return {boolean}
 */

var splitArray = function(nums) {
  if (nums.length < 7) {
    return false;
  }
  const n = nums.length;
  const sums = new Array(n).fill(0);
  sums[0] = nums[0];
  for (let i = 1; i < n; i++) {
    sums[i] = sums[i - 1] + nums[i];
  }
  for (let j = 3; j < n - 3; j++) {
    const values = {};
    for (let i = 1; i < j - 1; i++) {
      const left = sums[i - 1];
      const right = sums[j - 1] - sums[i];
      if (left === right) {
        values[left] = true;
      }
    }
    for (let k = j + 2; k < n - 1; k++) {
      const left = sums[k - 1] - sums[j];
      const right = sums[n - 1] - sums[k];
      if (left === right && values[left]) {
        return true;
      }
    }
  }
  return false;
};
