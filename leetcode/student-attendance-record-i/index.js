/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let nA = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      nA += 1;
    }
    if ((i >= 2 && s[i - 2] === 'L' && s[i - 1] === 'L' && s[i] === 'L') || nA > 1) {
      return false;
    }
  }
  return true;
};
