/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t, sStart = 0, tStart = 0) {
  for (let i = tStart; i < t.length; i++) {
    if (s[sStart] === t[i]) {
      return isSubsequence(s, t, sStart + 1, i + 1);
    }
  }
  return sStart >= s.length;
};
