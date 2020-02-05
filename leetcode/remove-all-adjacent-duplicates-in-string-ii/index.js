/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  let i = 0;
  let output = '';
  while (i < s.length) {
    let j = 0;
    while (j < k && s[i + j] === s[i]) {
      j += 1;
    }
    if (j < k) {
      output += s.substring(i, i + j);
    }
    i += j;
  }
  if (output.length < s.length) {
    return removeDuplicates(output, k);
  }
  return output;
};
