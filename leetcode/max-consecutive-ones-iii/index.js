/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  const counter = new Counter();
  let max = 0;
  let start = 0;
  for (let i = 0; i < A.length; i++) {
    counter.add(A[i]);
    while (counter.nZeros > K) {
      counter.delete(A[start]);
      start += 1;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};

class Counter {
  constructor() {
    this.nZeros = 0;
  }

  add(val) {
    this.nZeros += val === 0 ? 1 : 0;
  }

  delete(val) {
    this.nZeros -= val === 0 ? 1 : 0;
  }
}
