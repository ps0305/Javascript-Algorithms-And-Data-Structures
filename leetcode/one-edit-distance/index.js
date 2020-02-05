/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  if (Math.abs(s.length - t.length) > 1) {
    return false;
  }
  const n = Math.max(s.length, t.length);
  for (let i = 0; i < n; i++) {
    if (s[i] !== t[i]) {
      if (t.length > s.length) {
        return s.substring(0, i) + t[i] + s.substring(i) === t;
      } else if (s.length > t.length) {
        return s.substring(0, i) + '' + s.substring(i + 1) === t;
      } else {
        return s.substring(0, i) + t[i] + s.substring(i + 1) === t;
      }
    }
  }
  return false;
};
