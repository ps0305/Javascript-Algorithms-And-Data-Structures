/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

const MAX = 2 ** 31;

var divide = function(dividend, divisor) {
  const sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let output = 0;
  let m = dividend;
  let n = divisor;
  let i = 1;
  while (m >= n) {
    while (n + n <= m) {
      n = n + n;
      i = i + i;
      if (sign > 0 && n > MAX - 1) {
        return MAX - 1;
      } else if (sign < 0 && n > MAX) {
        return MAX;
      }
    }
    output += i;
    m -= n;
    n = divisor;
    i = 1;
  }
  return sign > 0 ? output : -output;
};
