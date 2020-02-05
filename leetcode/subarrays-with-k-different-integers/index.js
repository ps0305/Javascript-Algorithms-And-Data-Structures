/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
  return atMost(A, K) - atMost(A, K - 1);
};

function atMost(arr, k) {
  const counter = new Counter();
  let start = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    counter.add(arr[i]);
    while (counter.nDistinct > k) {
      counter.delete(arr[start]);
      start += 1;
    }
    count += i - start + 1;
  }
  return count;
}

class Counter {
  constructor() {
    this.freq = {};
    this.nDistinct = 0;
  }

  add(c) {
    this.freq[c] = (this.freq[c] || 0) + 1;
    if (this.freq[c] === 1) {
      this.nDistinct += 1;
    }
  }

  delete(c) {
    this.freq[c] -= 1;
    if (this.freq[c] === 0) {
      this.nDistinct -= 1;
    }
  }
}
