/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  return helper(nums);
};

function helper(arr, start = 0, selected = [], output = []) {
  if (selected.length >= 2) {
    output.push([...selected]);
  }
  const visited = new Set();
  for (let i = start; i < arr.length; i++) {
    if ((i > start && arr[i] === arr[i - 1]) || visited.has(arr[i])) {
      continue;
    }
    if (!selected.length || arr[i] >= selected[selected.length - 1]) {
      visited.add(arr[i]);
      selected.push(arr[i]);
      helper(arr, i + 1, selected, output);
      selected.pop();
    }
  }
  return output;
}
