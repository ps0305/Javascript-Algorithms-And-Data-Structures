/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  const m = S.length;
  const dp = new Array(m).fill(Infinity);
  dp[0] = S[0] === C ? 0 : dp[0];
  for (let i = 1; i < S.length; i++) {
    dp[i] = S[i] === C ? 0 : dp[i - 1] + 1;
  }
  dp[m - 1] = S[m - 1] === C ? 0 : dp[m - 1];
  for (let i = m - 2; i >= 0; i--) {
    dp[i] = S[i] === C ? 0 : Math.min(dp[i], dp[i + 1] + 1);
  }
  return dp;
};
