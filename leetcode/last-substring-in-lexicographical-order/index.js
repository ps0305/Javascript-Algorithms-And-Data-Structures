/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function(s) {
  let max = '';
  for (let i = 0; i < s.length; i++) {
    if (s.substring(i) > max) {
      max = s.substring(i);
    }
  }
  return max;
};
