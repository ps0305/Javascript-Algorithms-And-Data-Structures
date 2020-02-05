/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
  const sum = A.reduce((acc, cur) => acc + cur, 0);
  let output = -Infinity;
  let maxSoFar = 0;
  let minSoFar = 0;
  for (const n of A) {
    maxSoFar = Math.max(maxSoFar + n, n);
    minSoFar = Math.min(minSoFar + n, n);
    // prettier-ignore
    output = minSoFar === sum
      ? Math.max(output, maxSoFar)
      : Math.max(output, maxSoFar, sum - minSoFar);
  }
  return output;
};
