/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const m = s.length;
  for (let length = 1; length < m; length++) {
    const isDivisible = m % length === 0;
    const repeated = s.substring(0, length).repeat(m / length);
    if (isDivisible && repeated === s) {
      return true;
    }
  }
  return false;
};
