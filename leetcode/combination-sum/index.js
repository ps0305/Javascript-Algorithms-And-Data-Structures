/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  return helper(candidates, target);
};

function helper(candidates, target, start = 0, sum = 0, selected = [], output = []) {
  if (sum >= target) {
    if (sum === target) {
      output.push([...selected]);
    }
    return output;
  }
  for (let i = start; i < candidates.length; i++) {
    if (sum + candidates[i] > target) break;
    selected.push(candidates[i]);
    helper(candidates, target, i, sum + candidates[i], selected, output);
    selected.pop();
  }
  return output;
}
