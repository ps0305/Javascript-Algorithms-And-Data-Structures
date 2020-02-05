/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }
  const m = Math.abs(n);
  const p = Math.floor(m / 2);
  const val = myPow(x, p);
  const result = m % 2 === 1 ? x * val * val : val * val;
  return n > 0 ? result : 1 / result;
};
