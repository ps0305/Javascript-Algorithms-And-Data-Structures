/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (!n) {
    return false;
  }
  let nOnes = 0;
  let num = n;
  while (num) {
    nOnes += num & 1;
    num = num >> 1;
    if (nOnes >= 2) {
      return false;
    }
  }
  return true;
};
