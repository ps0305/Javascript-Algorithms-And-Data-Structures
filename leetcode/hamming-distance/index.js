/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let n = x ^ y;
  let output = 0;
  while (n) {
    output += n % 2;
    n >>= 1;
  }
  return output;
};
