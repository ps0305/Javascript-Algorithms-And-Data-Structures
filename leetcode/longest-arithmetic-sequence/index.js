/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
  const m = A.length;
  const dp = [...new Array(m)].map(() => ({}));
  let max = 2;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < i; j++) {
      const diff = A[i] - A[j];
      dp[i][diff] = (dp[j][diff] || 1) + 1;
      max = Math.max(max, dp[i][diff]);
    }
  }
  return max;
};
