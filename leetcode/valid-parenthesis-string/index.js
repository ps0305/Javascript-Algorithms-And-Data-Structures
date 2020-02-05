/**
 * @param {string} s
 * @return {boolean}
 */
/*
  Scan from left to right
  n = 0
  if '(' or '*', n += 1
  else n -= 1
  if n < 0, return false
  But this can not check the case like '**(('
  So we scan from right to left again
*/
var checkValidString = function(s) {
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(' || c === '*') {
      n += 1;
    } else if (c === ')') {
      n -= 1;
    }
    if (n < 0) return false;
  }
  n = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const c = s[i];
    if (c === ')' || c === '*') {
      n += 1;
    } else if (c === '(') {
      n -= 1;
    }
    if (n < 0) return false;
  }
  return true;
};
