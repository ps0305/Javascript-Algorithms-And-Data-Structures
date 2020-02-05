/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

const hasCycle = (graph, v, pre, visited) => {
  if (visited[v]) {
    return true;
  }
  visited[v] = true;
  for (let i = 0; i < graph[v].length; i++) {
    if (graph[v][i] === pre) {
      continue;
    }
    if (hasCycle(graph, graph[v][i], v, visited)) {
      return true;
    }
  }
  return false;
};

var validTree = function(n, edges) {
  const graph = [...new Array(n)].map(() => []);
  for (let i = 0; i < edges.length; i++) {
    const [v1, v2] = edges[i];
    graph[v1].push(v2);
    graph[v2].push(v1);
  }
  const visited = new Array(n).fill(false);
  if (hasCycle(graph, 0, null, visited)) {
    return false;
  }
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      return false;
    }
  }
  return true;
};
