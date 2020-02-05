/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const stack = [];
  const map = {};
  const m = nums.length;
  for (let i = 0; i < 2 * m; i++) {
    const num = nums[i % m];
    while (stack.length && nums[stack[stack.length - 1]] < num) {
      map[stack.pop()] = num;
    }
    if (i < m) {
      stack.push(i);
    }
  }
  return nums.map((_, i) => (i in map ? map[i] : -1));
};
