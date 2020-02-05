/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const map = {};
  const values = new Set();
  const words = str.split(' ');
  if (pattern.length !== words.length) {
    return false;
  }
  for (let i = 0; i < words.length; i++) {
    const p = pattern[i];
    const w = words[i];
    if (!(p in map) && !values.has(w)) {
      map[p] = w;
      values.add(w);
    } else if (map[p] !== w) {
      return false;
    }
  }
  return true;
};
