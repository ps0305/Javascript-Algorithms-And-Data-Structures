/**
 * Initialize your data structure here.
 */
var SummaryRanges = function() {
  this.set = new DisjointSet();
  this.intervals = {};
};

/**
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
  if (!this.set.has(val)) {
    this.set.add(val);
    this.intervals[val] = [val, val];
  }
  if (this.set.has(val + 1)) {
    merge(this.set, this.intervals, val, val + 1);
  }
  if (this.set.has(val - 1)) {
    merge(this.set, this.intervals, val - 1, val);
  }
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
  return Object.values(this.intervals);
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */

function merge(set, intervals, k1, k2) {
  const r1 = set.find(k1);
  const r2 = set.find(k2);
  const interval1 = intervals[r1];
  const interval2 = intervals[r2];
  set.union(r1, r2);
  delete intervals[r1];
  delete intervals[r2];
  // prettier-ignore
  intervals[r1] = [
    Math.min(interval1[0], interval2[0]),
    Math.max(interval1[1], interval2[1]),
  ];
}

class DisjointSet {
  constructor() {
    this.roots = {};
  }

  has(key) {
    return key in this.roots;
  }

  add(key) {
    this.roots[key] = key;
  }

  find(key) {
    let ptr = key;
    while (this.roots[ptr] !== ptr) {
      this.roots[ptr] = this.roots[this.roots[ptr]];
      ptr = this.roots[ptr];
    }
    return ptr;
  }

  union(k1, k2) {
    this.roots[k2] = k1;
  }
}
