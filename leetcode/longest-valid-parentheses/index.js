/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const stack = [-1];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      if (stack.length && s[stack[stack.length - 1]] === '(') {
        stack.pop();
      } else {
        stack.push(i);
      }
    }
  }
  stack.push(s.length);
  let output = 0;
  for (let i = 0; i <= stack.length - 2; i++) {
    const left = stack[i];
    const right = stack[i + 1];
    output = Math.max(output, right - left - 1);
  }
  return output;
};
