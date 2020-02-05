/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const helper = (candidates, target, start = 0, selected = new Set(), output = []) => {
  if (target <= 0) {
    if (target === 0) {
      output.push([...selected].map((i) => candidates[i]));
    }
    return output;
  }
  for (let i = start; i < candidates.length; i++) {
    if (target - candidates[i] < 0) {
      break;
    }
    if (candidates[i] === candidates[i - 1] && !selected.has(i - 1)) {
      continue;
    }
    selected.add(i);
    helper(candidates, target - candidates[i], i + 1, selected, output);
    selected.delete(i);
  }
  return output;
};

var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  return helper(candidates, target);
};
