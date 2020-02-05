/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function(A, B) {
  const m = A.length;
  let dp = new Array(2).fill(0);
  dp[1] = 1;
  for (let i = 1; i < m; i++) {
    const next = new Array(2).fill(0);
    next[0] = Math.min(
      isInc(A[i - 1], A[i], B[i - 1], B[i]) ? dp[0] : Infinity,
      isInc(B[i - 1], A[i], A[i - 1], B[i]) ? dp[1] : Infinity,
    );
    // prettier-ignore
    next[1] = 1 + Math.min(
      isInc(A[i - 1], B[i], B[i - 1], A[i]) ? dp[0] : Infinity,
      isInc(B[i - 1], B[i], A[i - 1], A[i]) ? dp[1] : Infinity,
    );
    dp = next;
  }
  return Math.min(...dp);
};

function isInc(a, b, c, d) {
  return a < b && c < d;
}
