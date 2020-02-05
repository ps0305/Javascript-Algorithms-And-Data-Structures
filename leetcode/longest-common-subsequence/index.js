/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  let dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= m; i++) {
    const next = new Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) {
      next[j] = helper(dp, next, text1, text2, i, j);
    }
    dp = next;
  }
  return dp[n];
};

function helper(dp, next, text1, text2, i, j) {
  if (text1[i - 1] === text2[j - 1]) {
    return dp[j - 1] + 1;
  }
  return Math.max(dp[j], next[j - 1], dp[j - 1]);
}
