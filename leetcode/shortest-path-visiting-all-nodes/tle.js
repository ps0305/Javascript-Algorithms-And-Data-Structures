/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
  const m = graph.length;
  const dist = new Array(2 ** m).fill(null).map(() => new Array(m).fill(Infinity));
  const queue = new Array(m).fill(null).map((_, i) => [new Selected(0).add(i), i, 0]);
  while (queue.length) {
    const [selected, i, d] = queue.shift();
    if (d >= dist[selected.val][i]) {
      continue;
    }
    dist[selected.val][i] = d;
    if (selected.val === 2 ** m - 1) {
      return dist[selected.val][i];
    }
    for (const j of graph[i]) {
      queue.push([selected.clone().add(j), j, d + 1]);
    }
  }
  return -1;
};

class Selected {
  constructor(val) {
    this.val = val;
  }

  add(i) {
    const mask = 2 ** i;
    this.val |= mask;
    return this;
  }

  has(i) {
    return ((this.val >> i) & 1) === 1;
  }

  clone() {
    return new Selected(this.val);
  }
}
