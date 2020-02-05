/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const output = [];
  const counter = new Counter(p);
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    counter.add(s[i]);
    while (counter.nRedundant > 0) {
      counter.delete(s[start]);
      start += 1;
    }
    if (i - start + 1 === p.length) {
      output.push(start);
    }
  }
  return output;
};

class Counter {
  constructor(str) {
    this.counter = {};
    for (const c of str) {
      this.counter[c] = (this.counter[c] || 0) + 1;
    }
    this.nRedundant = 0;
  }

  add(c) {
    this.counter[c] = (this.counter[c] || 0) - 1;
    if (this.counter[c] < 0) {
      this.nRedundant += 1;
    }
  }

  delete(c) {
    this.counter[c] += 1;
    if (this.counter[c] === 0) {
      this.nRedundant -= 1;
    }
  }
}
