/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

const createFactorial = (n) => {
  const output = { 0: 0, 1: 1 };
  let current = 1;
  for (let i = 2; i <= n; i++) {
    current *= i;
    output[i] = current;
  }
  return output;
};

var getPermutation = function(n, k) {
  const output = [];
  const numbers = [...new Array(n)].map((_, i) => i + 1);
  const factorial = createFactorial(n);
  let num = k - 1;
  for (let i = 0; i < n; i++) {
    const f = factorial[n - i - 1];
    const j = f > 0 ? Math.floor(num / f) : 0;
    output.push(numbers[j]);
    numbers.splice(j, 1);
    num = num % f;
  }
  return output.join('');
};
