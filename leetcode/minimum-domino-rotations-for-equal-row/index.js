/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  // prettier-ignore
  const min = Math.min(
    count(A, B, A[0]),
    count(A, B, B[0]),
    count(B, A, A[0]),
    count(B, A, B[0]),
  );
  return min < Infinity ? min : -1;
};

function count(arr1, arr2, target) {
  const m = arr1.length;
  let n = 0;
  for (let i = 0; i < m; i++) {
    if (arr1[i] !== target && arr2[i] !== target) {
      return Infinity;
    }
    if (arr1[i] !== target) {
      n += 1;
    }
  }
  return n;
}
