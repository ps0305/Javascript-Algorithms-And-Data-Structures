/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
  const m = A.length;
  const left = new Array(m).fill(null);
  const right = new Array(m).fill(null);
  let max = -Infinity;
  for (let i = 1; i < m; i++) {
    max = Math.max(max, A[i - 1]);
    left[i] = max;
  }
  let min = Infinity;
  for (let i = m - 1; i >= 0; i--) {
    min = Math.min(min, A[i]);
    right[i] = min;
  }
  for (let i = 1; i < m; i++) {
    if (right[i] >= left[i]) {
      return i;
    }
  }
  return 0;
};
