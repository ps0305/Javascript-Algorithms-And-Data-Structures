/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeI = function(A, K) {
  A.sort((a, b) => a - b);
  const first = A[0];
  const last = A[A.length - 1];
  const diff = last - first;
  const diffWith2K = diff - 2 * K;
  return diffWith2K <= 0 ? 0 : diffWith2K;
};

export default smallestRangeI;
