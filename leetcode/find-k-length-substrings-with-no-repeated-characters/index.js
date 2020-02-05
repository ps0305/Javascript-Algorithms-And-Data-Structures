/**
 * @param {string} S
 * @param {number} K
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(S, K) {
  const counter = new Counter();
  let start = 0;
  let n = 0;
  for (let i = 0; i < S.length; i++) {
    counter.add(S[i]);
    while (counter.nDuplicated > 0 || i - start + 1 > K) {
      counter.delete(S[start]);
      start += 1;
    }
    if (i - start + 1 === K) {
      n += 1;
    }
  }
  return n;
};

class Counter {
  constructor() {
    this.freq = {};
    this.nDuplicated = 0;
  }

  add(c) {
    this.freq[c] = (this.freq[c] || 0) + 1;
    if (this.freq[c] >= 2) {
      this.nDuplicated += 1;
    }
  }

  delete(c) {
    this.freq[c] = this.freq[c] - 1;
    if (this.freq[c] === 1) {
      this.nDuplicated -= 1;
    }
  }
}
