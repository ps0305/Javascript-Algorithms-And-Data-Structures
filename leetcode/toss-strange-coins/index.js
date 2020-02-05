/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function(prob, target) {
  const m = prob.length;
  const n = target;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1 - prob[0];
  dp[1] = prob[0];
  for (let i = 2; i <= m; i++) {
    const next = new Array(n + 1).fill(0);
    next[0] = dp[0] * (1 - prob[i - 1]);
    for (let j = 1; j <= n; j++) {
      next[j] = dp[j - 1] * prob[i - 1] + dp[j] * (1 - prob[i - 1]);
    }
    dp = next;
  }
  return dp[target];
};
