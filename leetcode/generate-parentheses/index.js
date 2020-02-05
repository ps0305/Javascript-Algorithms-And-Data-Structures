/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n, left = 0, right = 0, selected = '', output = []) {
  if (selected.length >= n * 2) {
    output.push(selected);
    return output;
  }
  if (left < n) {
    generateParenthesis(n, left + 1, right, selected + '(', output);
  }
  if (left > right) {
    generateParenthesis(n, left, right + 1, selected + ')', output);
  }
  return output;
};
