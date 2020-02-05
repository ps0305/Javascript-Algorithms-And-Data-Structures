/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const m = s.length;
  const n = p.length;
  let i = 0;
  let j = 0;
  const stack = [];
  while (i < m) {
    if (p[j + 1] === '*') {
      if (s[i] === p[j] || p[j] === '.') {
        stack.push([i + 1, j]);
      }
      j += 2;
    } else if (s[i] === p[j] || p[j] === '.') {
      i += 1;
      j += 1;
    } else if (stack.length) {
      [i, j] = stack.pop();
    } else {
      return false;
    }
  }
  while (j < n) {
    if (p[j + 1] !== '*') {
      return false;
    }
    j += 2;
  }
  return true;
};
