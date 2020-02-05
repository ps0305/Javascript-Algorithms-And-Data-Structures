/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) {
      i += 1;
    }
  }
  return i >= s.length;
};
