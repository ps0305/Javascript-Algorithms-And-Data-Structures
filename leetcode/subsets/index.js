/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums, start = 0, selected = [], output = []) {
  output.push([...selected]);
  if (start >= nums.length) {
    return output;
  }
  for (let i = start; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] && i !== start) {
      continue;
    }
    selected.push(nums[i]);
    subsets(nums, i + 1, selected, output);
    selected.pop();
  }
  return output;
};
