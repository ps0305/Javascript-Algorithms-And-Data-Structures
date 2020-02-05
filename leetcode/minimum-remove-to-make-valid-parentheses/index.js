/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  const stack = [];
  const invalid = new Set();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      if (stack.length) {
        stack.pop();
      } else {
        invalid.add(i);
      }
    }
  }
  for (const c of stack) {
    invalid.add(c);
  }
  let output = '';
  for (let i = 0; i < s.length; i++) {
    if (!invalid.has(i)) {
      output += s[i];
    }
  }
  return output;
};
