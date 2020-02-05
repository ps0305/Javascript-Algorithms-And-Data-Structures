/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const m = s.length;
  let sum = 0;
  for (let i = 0; i < m; i++) {
    sum += getCode(s[i]) * 26 ** (m - i - 1);
  }
  return sum;
};

function getCode(c) {
  return c.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
}
