/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let delta = 0;
  for (let i = 0; i < A.length - 1; i++) {
    if ((delta > 0) & (A[i + 1] < A[i]) || (delta < 0 && A[i + 1] > A[i])) {
      return false;
    }
    if (delta === 0) {
      delta = A[i + 1] - A[i];
    }
  }
  return true;
};
