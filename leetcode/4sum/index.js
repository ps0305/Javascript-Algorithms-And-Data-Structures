/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  return helper(nums, target);
};

function helper(nums, target, k = 2, start = 0, selected = [], output = []) {
  if (selected.length >= k) {
    let left = start;
    let right = nums.length - 1;
    while (left < right) {
      const sum = selected.reduce((a, b) => a + b, 0) + nums[left] + nums[right];
      if (sum === target) {
        output.push([...selected, nums[left], nums[right]]);
        left += 1;
        while (nums[left] === nums[left - 1]) {
          left += 1;
        }
        right -= 1;
        while (nums[right] === nums[right + 1]) {
          right += 1;
        }
      } else if (sum > target) {
        right -= 1;
      } else {
        left += 1;
      }
    }
    return output;
  }
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) {
      continue;
    }
    selected.push(nums[i]);
    helper(nums, target, k, i + 1, selected, output);
    selected.pop();
  }
  return output;
}
