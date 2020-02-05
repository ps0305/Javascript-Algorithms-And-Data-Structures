/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (const c of s) {
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else {
      const left = stack.pop();
      if (
        (c === ')' && left !== '(') ||
        (c === ']' && left !== '[') ||
        (c === '}' && left !== '{')
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
