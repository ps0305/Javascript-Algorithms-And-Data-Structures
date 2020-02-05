/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  const set = new DisjointSet();
  for (const [u, v] of edges) {
    if (set.find(u) === set.find(v)) {
      return [u, v];
    }
    set.union(u, v);
  }
};

class DisjointSet {
  constructor() {
    this.roots = {};
  }

  find(root) {
    if (!(root in this.roots)) {
      this.roots[root] = root;
      return root;
    }
    let ptr = root;
    while (this.roots[ptr] !== ptr) {
      ptr = this.roots[ptr];
    }
    return ptr;
  }

  union(p1, p2) {
    const r1 = this.find(p1);
    const r2 = this.find(p2);
    this.roots[r2] = r1;
  }
}
