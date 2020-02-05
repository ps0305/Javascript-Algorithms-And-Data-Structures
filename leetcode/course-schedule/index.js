/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = createGraph(prerequisites, numCourses);
  for (const u in graph) {
    if (hasCycle(graph, u)) {
      return false;
    }
  }
  return true;
};

function createGraph(edges, m) {
  const graph = [...new Array(m)].map(() => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
  }
  return graph;
}

function hasCycle(graph, u, visited = new Set()) {
  if (visited.has(u)) {
    return true;
  }
  visited.add(u);
  for (const v of graph[u]) {
    if (hasCycle(graph, v, visited)) {
      return true;
    }
  }
  visited.delete(u);
  return false;
}
