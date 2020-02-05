/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const counter = new Counter(s1);
  let start = 0;
  for (let i = 0; i < s2.length; i++) {
    counter.add(s2[i]);
    while (counter.nRedundant > 0) {
      counter.delete(s2[start]);
      start += 1;
    }
    if (i - start + 1 === s1.length) {
      return true;
    }
  }
  return false;
};

class Counter {
  constructor(target) {
    // prettier-ignore
    this.counts = target
      .split('')
      .reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
      }, {});
    this.nRedundant = 0;
  }

  add(c) {
    this.counts[c] = (this.counts[c] || 0) - 1;
    if (this.counts[c] < 0) {
      this.nRedundant += 1;
    }
  }

  delete(c) {
    this.counts[c] += 1;
    if (this.counts[c] <= 0) {
      this.nRedundant -= 1;
    }
  }
}
