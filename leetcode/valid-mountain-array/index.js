/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if (A.length < 3) {
    return false;
  }
  let isPeekVisited = false;
  for (let i = 0; i < A.length; i++) {
    if (i > 0 && i < A.length - 1 && A[i] > A[i - 1] && A[i] > A[i + 1]) {
      isPeekVisited = true;
      continue;
    }
    const isValid =
      (!isPeekVisited && (A[i + 1] || Infinity) > A[i] && A[i] > (A[i - 1] || -Infinity)) ||
      (isPeekVisited && A[i] > (A[i + 1] || -Infinity) && (A[i - 1] || Infinity) > A[i]);
    if (!isValid) {
      return false;
    }
  }
  return isPeekVisited;
};
