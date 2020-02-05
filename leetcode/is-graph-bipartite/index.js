/**
 * @param {number[][]} graph
 * @return {boolean}
 */

const dfs = (graph, u, label, visited) => {
  if (u in visited) {
    return label === visited[u];
  }
  visited[u] = label;
  for (const v of graph[u]) {
    if (!dfs(graph, v, (label + 1) % 2, visited)) {
      return false;
    }
  }
  return true;
};

var isBipartite = function(graph) {
  const n = graph.length;
  const visited = {};
  for (let i = 0; i < n; i++) {
    if (!(i in visited)) {
      if (!dfs(graph, i, 0, visited)) {
        return false;
      }
    }
  }
  return true;
};
