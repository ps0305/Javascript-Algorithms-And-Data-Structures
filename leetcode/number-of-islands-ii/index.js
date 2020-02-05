/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
  const output = [];
  const set = new DisjointSet();
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  for (const [x, y] of positions) {
    const k1 = encode(x, y, m, n);
    set.find(k1);
    for (const [di, dj] of dirs) {
      const i = x + di;
      const j = y + dj;
      const k2 = encode(i, j, m, n);
      if (isValid(i, j, m, n) && set.has(k2)) {
        set.union(k1, k2);
      }
    }
    output.push(set.nRoots);
  }
  return output;
};

function encode(i, j, m, n) {
  return n * i + j;
}

function isValid(i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return false;
  }
  return true;
}

class DisjointSet {
  constructor() {
    this.roots = {};
    this.nRoots = 0;
  }

  find(r) {
    if (!(r in this.roots)) {
      this.roots[r] = r;
      this.nRoots += 1;
      return r;
    }
    let ptr = r;
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

  has(r) {
    return r in this.roots;
  }
}
