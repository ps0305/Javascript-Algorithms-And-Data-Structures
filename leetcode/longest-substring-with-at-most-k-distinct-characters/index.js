/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  let start = 0;
  let max = 0;
  const counter = new Counter();
  for (let i = 0; i < s.length; i++) {
    counter.add(s[i]);
    while (counter.nDistinct > k) {
      counter.delete(s[start]);
      start += 1;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};

class Counter {
  constructor() {
    this.nDistinct = 0;
    this.freq = {};
  }

  add(c) {
    this.freq[c] = (this.freq[c] || 0) + 1;
    if (this.freq[c] === 1) {
      this.nDistinct += 1;
    }
  }

  delete(c) {
    this.freq[c] = this.freq[c] - 1;
    if (this.freq[c] === 0) {
      this.nDistinct -= 1;
    }
  }
}
