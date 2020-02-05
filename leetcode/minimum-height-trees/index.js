/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

const createGraph = (n, edges) => {
  const graph = [...new Array(n)].map(() => new Set());
  for (let i = 0; i < edges.length; i++) {
    const [v1, v2] = edges[i];
    graph[v1].add(v2);
    graph[v2].add(v1);
  }
  return graph;
};

var findMinHeightTrees = function(n, edges) {
  const graph = createGraph(n, edges);
  const visited = new Array(n).fill(false);
  const queue = [];
  for (let i = 0; i < graph.length; i++) {
    if (graph[i].size <= 1) {
      visited[i] = true;
      queue.push(i);
    }
  }
  let m = n;
  while (m > 2) {
    m -= queue.length;
    const leaves = [];
    while (queue.length) {
      const u = queue.shift();
      for (const v of graph[u]) {
        if (!visited[v]) {
          graph[u].delete(v);
          graph[v].delete(u);
          if (graph[v].size === 1) {
            visited[v] = true;
            leaves.push(v);
          }
        }
      }
    }
    queue.push(...leaves);
  }
  return queue;
};
