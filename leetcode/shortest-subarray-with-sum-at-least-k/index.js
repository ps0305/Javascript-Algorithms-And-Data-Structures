/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
  const n = A.length;
  const S = new Array(n).fill(0);
  S[0] = A[0];
  for (let i = 1; i < n; i++) {
    S[i] = S[i - 1] + A[i];
  }
  const q = [-1];
  let output = Infinity;
  for (let i = 0; i < n; i++) {
    while (q.length && S[i] <= (S[q[q.length - 1]] || 0)) {
      q.pop();
    }
    while (q.length && S[i] - (S[q[0]] || 0) >= K) {
      output = Math.min(output, i - q[0]);
      q.shift();
    }
    q.push(i);
  }
  return output < Infinity ? output : -1;
};
