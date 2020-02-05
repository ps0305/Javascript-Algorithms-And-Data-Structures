/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function(A, B) {
  const m = A.length;
  const dp = new Array(m).fill(null).map(() => new Array(2).fill(0));
  dp[0][1] = 1;
  for (let i = 1; i < m; i++) {
    dp[i][0] = Math.min(
      isInc(A[i - 1], A[i], B[i - 1], B[i]) ? dp[i - 1][0] : Infinity,
      isInc(B[i - 1], A[i], A[i - 1], B[i]) ? dp[i - 1][1] : Infinity,
    );
    // prettier-ignore
    dp[i][1] = 1 + Math.min(
      isInc(A[i - 1], B[i], B[i - 1], A[i]) ? dp[i - 1][0] : Infinity,
      isInc(B[i - 1], B[i], A[i - 1], A[i]) ? dp[i - 1][1] : Infinity,
    );
  }
  return Math.min(...dp[m - 1]);
};

function isInc(a, b, c, d) {
  return a < b && c < d;
}
