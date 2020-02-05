/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(nLabels, edges) {
  let n = nLabels;
  const roots = [...new Array(n)].map((_, i) => i);
  for (let i = 0; i < edges.length; i++) {
    const [v1, v2] = edges[i];
    const r1 = find(roots, v1);
    const r2 = find(roots, v2);
    if (r1 !== r2) {
      union(roots, r1, r2);
      n -= 1;
    }
  }
  return n;
};

const find = (roots, v) => {
  let ptr = v;
  while (roots[ptr] !== ptr) {
    roots[ptr] = roots[roots[ptr]];
    ptr = roots[ptr];
  }
  return ptr;
};

const union = (roots, r1, r2) => {
  roots[r1] = r2;
};
