/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
  const m = nums.length;

  const sums = new Array(m).fill(0);
  sums[0] = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0);
  for (let i = 1; i <= m - k; i++) {
    sums[i] = sums[i - 1] + nums[i + k - 1] - nums[i - 1];
  }

  const left = new Array(m).fill(0);
  left[k - 1] = 0;
  for (let i = k; i < m; i++) {
    left[i] = sums[i - k + 1] > sums[left[i - 1]] ? i - k + 1 : left[i - 1];
  }

  const right = new Array(m).fill(0);
  right[m - k] = m - k;
  for (let i = m - k - 1; i >= 0; i--) {
    right[i] = sums[i] > sums[right[i + 1]] ? i : right[i + 1];
  }

  let output;
  let max = 0;
  for (let i = k; i <= m - 2 * k; i++) {
    const sum = sums[left[i - 1]] + sums[i] + sums[right[i + k]];
    if (sum > max) {
      max = sum;
      output = [left[i - 1], i, right[i + k]];
    }
  }
  return output;
};
