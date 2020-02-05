/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
  const m = A.length;
  const n = B[0].length;
  const output = [...new Array(m)].map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < A[i].length; k++) {
        output[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return output;
};
