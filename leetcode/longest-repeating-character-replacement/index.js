/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const counter = new Counter(s);
  let start = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    counter.add(s[i]);
    while (i - start + 1 - counter.maxFreq > k) {
      counter.delete(s[start]);
      start += 1;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};

class Counter {
  constructor(s) {
    this.maxFreq = 0;
    this.freq = {};
  }

  updateMaxFreq() {
    this.maxFreq = 0;
    for (let i = 0; i < 26; i++) {
      const c = String.fromCharCode(65 + i);
      if (c in this.freq) {
        this.maxFreq = Math.max(this.maxFreq, this.freq[c]);
      }
    }
  }

  add(c) {
    this.freq[c] = (this.freq[c] || 0) + 1;
    this.updateMaxFreq();
  }

  delete(c) {
    this.freq[c] -= 1;
    this.updateMaxFreq();
  }
}
