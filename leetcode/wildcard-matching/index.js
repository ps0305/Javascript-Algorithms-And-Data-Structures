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
    if (s[i] === p[j] || p[j] === '?') {
      i += 1;
      j += 1;
    } else if (p[j] === '*') {
      stack.push([i + 1, j]);
      j += 1;
    } else if (stack.length) {
      [i, j] = stack.pop();
    } else {
      return false;
    }
  }
  while (j < n) {
    if (p[j] !== '*') {
      return false;
    }
    j += 1;
  }
  return true;
};
