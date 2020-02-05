/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canConvert = function(str1, str2) {
  if (str1 === str2) {
    return true;
  }
  const map = {};
  for (let i = 0; i < str1.length; i++) {
    if (!(str1[i] in map)) {
      map[str1[i]] = str2[i];
    } else if (map[str1[i]] !== str2[i]) {
      return false;
    }
  }
  return new Set(str2).size < 26;
};
