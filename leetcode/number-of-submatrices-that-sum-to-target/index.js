/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  const arr = new Array(m).fill(0);
  let nSumTarget = 0;
  for (let left = 0; left < n; left++) {
    for (let right = left; right < n; right++) {
      for (let i = 0; i < m; i++) {
        arr[i] = (left === right ? 0 : arr[i]) + matrix[i][right];
      }
      nSumTarget += count(arr, target);
    }
  }
  return nSumTarget;
};

function count(arr, target) {
  const freq = { 0: 1 };
  let sum = 0;
  let nSumTarget = 0;
  for (const num of arr) {
    sum += num;
    nSumTarget += freq[sum - target] || 0;
    freq[sum] = (freq[sum] || 0) + 1;
  }
  return nSumTarget;
}
