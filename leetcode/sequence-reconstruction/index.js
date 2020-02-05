/**
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
var sequenceReconstruction = function(org, seqs) {
  const [graph, inDegree] = createGraph(seqs);
  const queue = Object.keys(inDegree).filter((u) => inDegree[u] === 0);
  let i = 0;
  while (queue.length) {
    if (queue.length > 1 || String(org[i]) !== String(queue[0])) {
      return false;
    }
    const u = queue.shift();
    for (const v of graph[u]) {
      inDegree[v] -= 1;
      if (inDegree[v] === 0) {
        queue.push(v);
      }
    }
    i += 1;
  }
  if (i !== org.length) {
    return false;
  }
  for (const key in inDegree) {
    if (inDegree[key] > 0) {
      return false;
    }
  }
  return true;
};

function createGraph(seqs) {
  const graph = {};
  const inDegree = {};
  for (const seq of seqs) {
    for (let i = 0; i < seq.length - 1; i++) {
      const u = seq[i];
      const v = seq[i + 1];
      if (!(u in graph)) graph[u] = [];
      if (!(v in graph)) graph[v] = [];
      if (!(u in inDegree)) inDegree[u] = 0;
      if (!(v in inDegree)) inDegree[v] = 0;
      graph[u].push(v);
      inDegree[v] += 1;
    }
    if (seq.length) {
      const i = seq.length - 1;
      const u = seq[i];
      if (!(u in graph)) graph[u] = [];
      if (!(u in inDegree)) inDegree[u] = 0;
    }
  }
  return [graph, inDegree];
}
