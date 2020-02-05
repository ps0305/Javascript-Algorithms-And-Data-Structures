/**
 * @param {string} s
 * @return {number}
 */

const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function(s) {
  let output = 0;
  for (let i = 0; i < s.length; i++) {
    output += (() => {
      if (map[s[i]] >= (map[s[i + 1]] || 0)) {
        return map[s[i]];
      }
      return -1 * map[s[i]];
    })();
  }
  return output;
};
