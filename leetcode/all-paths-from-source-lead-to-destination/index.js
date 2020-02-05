/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function(n, edges, source, destination) {
  const graph = createGraph(n, edges);
  return dfs(graph, source, destination);
};

function createGraph(n, edges) {
  const graph = [...new Array(n)].map(() => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
  }
  return graph;
}

function dfs(graph, s, d, u = s, visited = new Set()) {
  if (!graph[u].length) {
    return u === d;
  }
  if (visited.has(u)) {
    return false;
  }
  visited.add(u);
  for (const v of graph[u]) {
    if (!dfs(graph, s, d, v, visited)) {
      return false;
    }
  }
  visited.delete(u);
  return true;
}
