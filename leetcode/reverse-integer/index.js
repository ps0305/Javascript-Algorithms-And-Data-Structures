/**
 * @param {number} x
 * @return {number}
 */

const MAX = 2 ** 31 - 1;
const MIN = -(2 ** 31);

var reverse = function(x) {
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  let output = 0;
  while (x > 0) {
    output = 10 * output + (x % 10);
    x = Math.floor(x / 10);
    const isOverflowed = output > MAX || output < MIN;
    if (isOverflowed) {
      return 0;
    }
  }
  return sign * output;
};
