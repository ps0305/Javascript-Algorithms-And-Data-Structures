/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
  const M = 10 ** 9 + 7;
  const p = 1;
  const q = 2;
  let dp = [...new Array(p + 1)].map(() => new Array(q + q).fill(1));
  for (let i = 1; i <= n; i++) {
    const next = [...new Array(p + 1)].map(() => new Array(q + q).fill(0));
    for (let j = 0; j <= p; j++) {
      for (let k = 0; k <= q; k++) {
        // prettier-ignore
        const sum = (j - 1 >= 0 ? dp[j - 1][q] : 0)
          + (k - 1 >= 0 ? dp[j][k - 1] : 0)
          + dp[j][q];
        next[j][k] = sum % M;
      }
    }
    dp = next;
  }
  return dp[p][q];
};
