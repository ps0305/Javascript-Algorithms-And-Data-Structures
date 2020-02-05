/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n < 3) {
    return 0;
  }
  const isPrime = new Array(n).fill(false);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (!isPrime[i]) {
      count += 1;
      for (let j = 2; i * j < n; j++) {
        isPrime[i * j] = true;
      }
    }
  }
  return count;
};
