/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new DisjointSet(nums);
  for (const num of nums) {
    if (set.find(num + 1) !== null) {
      set.union(num, num + 1);
    }
    if (set.find(num - 1) !== null) {
      set.union(num, num - 1);
    }
  }
  const freq = {};
  for (const key of set.keys()) {
    const root = set.find(key);
    freq[root] = (freq[root] || 0) + 1;
  }
  return Math.max(...Object.values(freq), 0);
};

class DisjointSet {
  constructor(keys) {
    this.roots = new Map();
    for (const key of keys) {
      this.roots.set(key, key);
    }
  }

  find(root) {
    if (!this.roots.has(root)) {
      return null;
    }
    let ptr = root;
    while (this.roots.get(ptr) !== ptr) {
      this.roots.set(ptr, this.roots.get(this.roots.get(ptr)));
      ptr = this.roots.get(ptr);
    }
    return ptr;
  }

  union(r1, r2) {
    if (r1 > r2) {
      return this.union(r2, r1);
    }
    this.roots.set(r2, r1);
  }

  keys() {
    return this.roots.keys();
  }
}
