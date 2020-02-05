/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, selected = new Set(), output = []) {
  if (selected.size >= nums.length) {
    output.push([...selected].map((i) => nums[i]));
    return output;
  }
  for (let i = 0; i < nums.length; i++) {
    if (selected.has(i)) continue;
    selected.add(i);
    permute(nums, selected, output);
    selected.delete(i);
  }
  return output;
};
