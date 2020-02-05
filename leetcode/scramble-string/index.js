/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/*
  rg t ae
  gr ea t
*/
var isScramble = function(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  if (normalize(s1) !== normalize(s2)) {
    return false;
  }
  if (s1 === s2) {
    return true;
  }
  for (let length = 1; length < s1.length; length++) {
    const result =
      (isScramble(s1.substring(0, length), s2.substring(0, length)) &&
        isScramble(s1.substring(length), s2.substring(length))) ||
      (isScramble(s1.substring(s1.length - length), s2.substring(0, length)) &&
        isScramble(s1.substring(0, s1.length - length), s2.substring(length)));
    if (result) {
      return true;
    }
  }
  return false;
};

function normalize(str) {
  return str
    .split('')
    .sort()
    .join('');
}
