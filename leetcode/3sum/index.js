/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const output = [];
  const n = nums.length;
  const target = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        output.push([nums[i], nums[left], nums[right]]);
        left += 1;
        right -= 1;
        while (nums[left] === nums[left - 1]) {
          left += 1;
        }
        while (nums[right] === nums[right + 1]) {
          right -= 1;
        }
      } else if (sum < target) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return output;
};
