/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b);
  return helper(nums);
};

function helper(nums, selected = new Set(), output = []) {
  if (selected.size >= nums.length) {
    output.push([...selected].map((i) => nums[i]));
    return output;
  }
  for (let i = 0; i < nums.length; i++) {
    if (selected.has(i) || (nums[i - 1] === nums[i] && !selected.has(i - 1))) {
      continue;
    }
    selected.add(i);
    helper(nums, selected, output);
    selected.delete(i);
  }
  return output;
}
