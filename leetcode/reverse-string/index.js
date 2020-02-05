/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  const output = [];
  for (let i = s.length - 1; i >= 0; i--) {
    output.push(s[i]);
  }
  return output.join('');
};
