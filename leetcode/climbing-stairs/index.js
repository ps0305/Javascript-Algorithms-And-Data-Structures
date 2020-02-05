/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) {
    return n;
  }
  let x = 1;
  let y = 2;
  let dp = y;
  for (let i = 3; i <= n; i++) {
    dp = x + y;
    x = y;
    y = dp;
  }
  return dp;
};
