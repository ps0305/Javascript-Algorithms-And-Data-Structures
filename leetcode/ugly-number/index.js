/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  const factors = [2, 3, 5];
  let n = num;
  for (const factor of factors) {
    while (n && n % factor === 0) {
      n /= factor;
    }
  }
  return n === 1;
};
