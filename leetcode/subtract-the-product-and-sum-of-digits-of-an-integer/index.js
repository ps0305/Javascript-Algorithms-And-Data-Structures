/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  if (n === 0) {
    return 0;
  }
  let num = n;
  let product = 1;
  let sum = 0;
  while (num > 0) {
    const r = num % 10;
    product *= r;
    sum += r;
    num = Math.floor(num / 10);
  }
  return product - sum;
};
