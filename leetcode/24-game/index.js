/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
  if (nums.length <= 1) {
    return Math.abs(nums[0] - 24) < 0.01;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const p = nums[i];
      const q = nums[j];
      for (const n of createCombinations(p, q)) {
        nums.splice(i, 1);
        nums.splice(j, 1);
        nums.push(n);
        if (judgePoint24(nums)) {
          return true;
        }
        nums.pop(n);
        nums.splice(j, 0, q);
        nums.splice(i, 0, p);
      }
    }
  }
  return false;
};

function createCombinations(a, b) {
  return [a + b, a - b, b - a, a * b, a / b, b / a];
}
