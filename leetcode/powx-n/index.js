/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const MIN = -(2 ** 31);

var myPow = function(x, n) {
  if (x > 1 && n <= MIN) {
    return 0;
  }
  let p = x;
  let q = Math.abs(n);
  let output = 1;
  while (q > 0) {
    output = (q & 1) === 1 ? output * p : output;
    p = p * p;
    q = q >> 1;
  }
  return n >= 0 ? output : 1 / output;
};
