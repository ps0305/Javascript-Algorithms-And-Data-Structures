/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function(n, start) {
  const arr = createGrayCode(n);
  const index = arr.indexOf(start);
  return [...arr.slice(index), ...arr.slice(0, index)];
};

function createGrayCode(n) {
  const dp = [0];
  for (let i = 0; i < n; i++) {
    const next = dp.slice().reverse();
    for (let j = 0; j < next.length; j++) {
      next[j] += 2 ** i;
    }
    dp.push(...next);
  }
  return dp;
}
