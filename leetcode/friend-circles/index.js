/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  const m = M.length;
  const n = M[0].length;
  const set = new DisjointSet();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1) {
        set.union(i, j);
      }
    }
  }
  return set.nRoots;
};

class DisjointSet {
  constructor() {
    this.nRoots = 0;
    this.roots = {};
  }

  find(root) {
    if (!(root in this.roots)) {
      this.roots[root] = root;
      this.nRoots += 1;
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
