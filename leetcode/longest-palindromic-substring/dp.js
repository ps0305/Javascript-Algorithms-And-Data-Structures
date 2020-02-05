/**
 * @param {string} s
 * @return {string}
 */
/*
  dp[i][j] = s[i] === s[j] ? dp[i + 1][j - 1] : false;
*/
var longestPalindrome = function(s) {
  const m = s.length;
  const dp = [...new Array(m)].map(() => new Array(m).fill(false));
  let max = '';
  for (let length = 1; length <= m; length++) {
    for (let i = 0; i < m - length + 1; i++) {
      const j = i + length - 1;
      dp[i][j] = s[i] === s[j] && (length <= 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && length > max.length) {
        max = s.substring(i, i + length);
      }
    }
  }
  return max;
};
