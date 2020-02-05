/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const dp = [0];
  for (let i = 0; i < n; i++) {
    const next = dp.slice().reverse();
    for (let j = 0; j < next.length; j++) {
      next[j] += 2 ** i;
    }
    dp.push(...next);
  }
  return dp;
};
