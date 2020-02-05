/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
  const nums = [];
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      nums.push(i);
    }
  }
  return createCombinations(nums, n);
};

function createCombinations(nums, target, selected = [], selectedSum = 1, output = []) {
  if (selectedSum >= target) {
    if (selectedSum === target && selected.length) {
      output.push([...selected]);
    }
    return output;
  }
  for (const num of nums) {
    if (!selected.length || num >= selected[selected.length - 1]) {
      selected.push(num);
      createCombinations(nums, target, selected, selectedSum * num, output);
      selected.pop();
    }
  }
  return output;
}
