/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function(nums) {
  const stack = [];
  let count = 0;
  for (const num of nums) {
    while (stack.length && num < stack[stack.length - 1]) {
      count += stack.length;
      stack.pop();
    }
    stack.push(num);
  }
  while (stack.length) {
    count += stack.length;
    stack.pop();
  }
  return count;
};
