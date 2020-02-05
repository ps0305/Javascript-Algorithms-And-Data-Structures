/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = helper(i, dp);
  }
  return dp[n];
};

function helper(i, dp) {
  let min = Infinity;
  let j = 1;
  while (i - j ** 2 >= 0) {
    min = Math.min(min, 1 + dp[i - j ** 2]);
    j += 1;
  }
  return min;
}
