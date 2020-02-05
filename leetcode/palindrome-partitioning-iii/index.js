/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var palindromePartition = function(s, k) {
  const m = s.length;
  const dp1 = createDP1(s, m);
  const dpk = new Array(m).fill(null).map(() => new Array(k + 1).fill(Infinity));
  for (let i = 0; i < m; i++) {
    dpk[i][1] = dp1[0][i];
  }
  for (let i = 0; i < m; i++) {
    for (let j = 2; j <= k; j++) {
      for (let x = 0; x <= i - 1; x++) {
        const value = dpk[x][j - 1] + dp1[x + 1][i];
        dpk[i][j] = Math.min(dpk[i][j], value);
      }
    }
  }
  return dpk[m - 1][k];
};

function createDP1(s, m) {
  const dp = new Array(m).fill(null).map(() => new Array(m).fill(0));
  for (let j = 0; j < m; j++) {
    for (let i = 0; i <= j; i++) {
      dp[i][j] = (s[i] === s[j] ? 0 : 1) + (i + 1 <= j - 1 ? dp[i + 1][j - 1] : 0);
    }
  }
  return dp;
}
