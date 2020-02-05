/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p, i = 0, j = 0) {
  if (j >= p.length) {
    return i >= s.length;
  }
  if ((i === s.length && p[j + 1] !== '*') || i > s.length) {
    return false;
  }
  if (p[j + 1] === '*') {
    return ((s[i] === p[j] || p[j] === '.') && isMatch(s, p, i + 1, j)) || isMatch(s, p, i, j + 2);
  }
  return (s[i] === p[j] || p[j] === '.') && isMatch(s, p, i + 1, j + 1);
};
