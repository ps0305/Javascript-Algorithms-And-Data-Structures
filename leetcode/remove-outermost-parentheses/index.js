/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  const stack = [];
  let output = '';
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      stack.push(i);
    } else if (S[i] === ')') {
      const left = stack.pop();
      if (!stack.length) {
        output += S.substring(left + 1, i);
      }
    }
  }
  return output;
};
