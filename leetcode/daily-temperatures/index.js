/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const output = new Array(T.length).fill(0);
  const stack = [];
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      const j = stack.pop();
      output[j] = i - j;
    }
    stack.push(i);
  }
  return output;
};
