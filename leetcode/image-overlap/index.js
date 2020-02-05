/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
  const m = A.length;
  const n = A[0].length;
  const arr1 = find(A, m, n, 1);
  const arr2 = find(B, m, n, 1);
  const freq = new Map();
  let max = 0;
  for (const [x1, y1] of arr1) {
    for (const [x2, y2] of arr2) {
      const vector = [x1 - x2, y1 - y2];
      const key = 2 * n * vector[0] + vector[1];
      freq.set(key, (freq.get(key) || 0) + 1);
      max = Math.max(max, freq.get(key));
    }
  }
  return max;
};

function find(matrix, m, n, target) {
  const arr = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === target) {
        arr.push([i, j]);
      }
    }
  }
  return arr;
}
