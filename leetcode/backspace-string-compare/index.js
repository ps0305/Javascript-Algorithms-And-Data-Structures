/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let i = S.length - 1;
  let j = T.length - 1;
  while (i >= 0 || j >= 0) {
    i -= count(S, i);
    j -= count(T, j);
    if (S[i] !== T[j]) {
      return false;
    }
    i -= 1;
    j -= 1;
  }
  return i < 0 && j < 0;
};

function count(str, start) {
  let i = start;
  let n = 0;
  while (str[i] === '#' || n > 0) {
    if (str[i] === '#') {
      n += 1;
    } else {
      n -= 1;
    }
    i -= 1;
  }
  return start - i;
}
