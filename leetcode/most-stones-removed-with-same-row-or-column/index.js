/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
  const set = new DisjointSet();
  const m = 10000;
  for (const stone of stones) {
    const [k1, k2] = createKey(stone, m);
    set.union(k1, k2);
  }
  return stones.length - set.nRoots;
};

function createKey([x, y], m) {
  return [x, m + y];
}

class DisjointSet {
  constructor() {
    this.roots = {};
    this.nRoots = 0;
  }

  find(root) {
    if (!(root in this.roots)) {
      this.roots[root] = root;
      this.nRoots += 1;
      return root;
    }
    let ptr = root;
    while (this.roots[ptr] !== ptr) {
      this.roots[ptr] = this.roots[this.roots[ptr]];
      ptr = this.roots[ptr];
    }
    return ptr;
  }

  union(p1, p2) {
    const r1 = this.find(p1);
    const r2 = this.find(p2);
    if (r1 !== r2) {
      this.roots[r2] = r1;
      this.nRoots -= 1;
    }
  }
}
