/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
  const partition = { max: A[0], index: 0 };
  let max = A[0];
  for (let i = 1; i < A.length; i++) {
    max = Math.max(max, A[i]);
    if (A[i] < partition.max) {
      partition.max = max;
      partition.index = i;
    }
  }
  return partition.index + 1;
};
