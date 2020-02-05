/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let output = '';
  let i = a.length - 1;
  let j = b.length - 1;
  let c = 0;
  while (i >= 0 || j >= 0 || c > 0) {
    // prettier-ignore
    const sum = (i >= 0 ? parseInt(a[i]) : 0)
      + (j >= 0 ? parseInt(b[j]) : 0)
      + c;
    output = (sum & 1) + output;
    c = sum >> 1;
    i -= 1;
    j -= 1;
  }
  return output;
};
