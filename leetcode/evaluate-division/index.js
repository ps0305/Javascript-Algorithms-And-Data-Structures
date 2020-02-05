/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const graph = createGraph(equations, values);
  const map = {};
  for (const u in graph) {
    dfs(graph, u, u, 1, map);
  }
  // prettier-ignore
  return queries
    .map(([A, B]) => {
      if (A in graph && B in graph && A === B) {
        return 1;
      }
      const key = A + ',' + B;
      return key in map ? map[key] : -1;
    });
};

function dfs(graph, u, head, product, map, visited = new Set()) {
  if (!(u in graph)) {
    return;
  }
  for (const [v, val] of graph[u]) {
    if (visited.has(v)) {
      continue;
    }
    map[head + ',' + v] = product * val;
    map[v + ',' + head] = 1 / (product * val);
    visited.add(v);
    dfs(graph, v, head, product * val, map, visited);
    visited.delete(v);
  }
}

function createGraph(equations, values) {
  const graph = {};
  const m = equations.length;
  for (let i = 0; i < m; i++) {
    const [A, B] = equations[i];
    const val = values[i];
    if (!(A in graph)) graph[A] = [];
    if (!(B in graph)) graph[B] = [];
    graph[A].push([B, val]);
    graph[B].push([A, 1 / val]);
  }
  return graph;
}
