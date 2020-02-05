/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const map = {};
  const visited = new Set();
  for (let i = 0; i < s.length; i++) {
    if ((!(s[i] in map) && visited.has(t[i])) || (s[i] in map && map[s[i]] !== t[i])) {
      return false;
    }
    map[s[i]] = t[i];
    visited.add(t[i]);
  }
  return true;
};
