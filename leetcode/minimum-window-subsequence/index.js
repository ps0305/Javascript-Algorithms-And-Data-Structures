/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindow = function(S, T) {
  const m = S.length;
  const n = T.length;
  let dp = new Array(n + 1).fill(-1);
  dp[0] = 0;
  let min = S + S;
  for (let i = 1; i <= m; i++) {
    const next = new Array(n + 1).fill(-1);
    next[0] = i;
    for (let j = 1; j <= n; j++) {
      next[j] = S[i - 1] === T[j - 1] ? dp[j - 1] : dp[j];
    }
    dp = next;
    if (dp[n] >= 0 && i - dp[n] < min.length) {
      min = S.substring(dp[n], i);
    }
  }
  return min.length <= S.length ? min : '';
};
