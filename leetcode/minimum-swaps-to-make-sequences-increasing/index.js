/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function(A, B) {
  const m = A.length;
  let dp0 = 0;
  let dp1 = 1;
  for (let i = 1; i < m; i++) {
    const next0 = Math.min(
      isInc(A[i - 1], A[i], B[i - 1], B[i]) ? dp0 : Infinity,
      isInc(B[i - 1], A[i], A[i - 1], B[i]) ? dp1 : Infinity,
    );
    // prettier-ignore
    const next1 = 1 + Math.min(
      isInc(A[i - 1], B[i], B[i - 1], A[i]) ? dp0 : Infinity,
      isInc(B[i - 1], B[i], A[i - 1], A[i]) ? dp1 : Infinity,
    );
    dp0 = next0;
    dp1 = next1;
  }
  return Math.min(dp0, dp1);
};

function isInc(a, b, c, d) {
  return a < b && c < d;
}
