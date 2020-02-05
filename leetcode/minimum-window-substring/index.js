/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const counter = new Counter(t);
  let start = 0;
  let min = s + s;
  for (let i = 0; i < s.length; i++) {
    counter.add(s[i]);
    while (counter.isComplete()) {
      if (i - start + 1 < min.length) {
        min = s.substring(start, i + 1);
      }
      counter.delete(s[start]);
      start += 1;
    }
  }
  return min.length <= s.length ? min : '';
};

class Counter {
  constructor(str) {
    this.freq = {};
    for (const c of str) {
      this.freq[c] = (this.freq[c] || 0) + 1;
    }
    this.nRemaining = str.length;
  }

  add(c) {
    this.freq[c] = (this.freq[c] || 0) - 1;
    if (this.freq[c] >= 0) {
      this.nRemaining -= 1;
    }
  }

  delete(c) {
    this.freq[c] = this.freq[c] + 1;
    if (this.freq[c] > 0) {
      this.nRemaining += 1;
    }
  }

  isComplete() {
    return this.nRemaining === 0;
  }
}
