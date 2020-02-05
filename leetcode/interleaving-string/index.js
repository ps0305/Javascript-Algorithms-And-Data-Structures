/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s3.length > s1.length + s2.length) {
    return false;
  }
  const m = s1.length;
  const n = s2.length;
  const dp = [...new Array(m + 1)].map(() => new Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let i = 0; i <= m; i++) {
    dp[i][0] = s1.substring(0, i) === s3.substring(0, i);
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = s2.substring(0, j) === s3.substring(0, j);
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        (s1[i - 1] === s3[i + j - 1] && dp[i - 1][j]) ||
        (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1]);
    }
  }
  return dp[m][n];
};
