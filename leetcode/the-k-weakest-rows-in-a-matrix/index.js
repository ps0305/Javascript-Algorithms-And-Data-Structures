/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  return mat
    .map((row, i) => [i, count(row)])
    .sort((a, b) => {
      if (a[1] !== b[1]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    })
    .slice(0, k)
    .map(([i]) => i);
};

function count(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      return i;
    }
  }
  return arr.length;
}
