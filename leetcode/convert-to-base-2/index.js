/**
 * @param {number} N
 * @return {string}
 */
var baseNeg2 = function(N) {
  if (N === 0) {
    return '0';
  }
  let num = N;
  let output = '';
  while (num) {
    output = (num & 1) + output;
    num = -(num >> 1);
  }
  return output;
};
