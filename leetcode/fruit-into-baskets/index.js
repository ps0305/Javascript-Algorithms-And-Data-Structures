/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
  const counter = new Counter();
  let start = 0;
  let max = -Infinity;
  for (let i = 0; i < tree.length; i++) {
    const c = tree[i];
    counter.add(c);
    while (counter.n > 2) {
      counter.delete(tree[start]);
      start += 1;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};

class Counter {
  constructor() {
    this.counts = {};
    this.n = 0;
  }

  add(c) {
    this.counts[c] = (this.counts[c] || 0) + 1;
    if (this.counts[c] === 1) {
      this.n += 1;
    }
  }

  delete(c) {
    this.counts[c] -= 1;
    if (this.counts[c] < 1) {
      this.n -= 1;
    }
  }
}
