/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  const graph = createGraph(n, connections);
  const output = [];
  dfs(graph, 0, null, output);
  return output;
};

function dfs(graph, i, pre, output, depth = 0, rank = new Array(graph.length).fill(Infinity)) {
  if (rank[i] < Infinity) {
    return rank[i];
  }
  rank[i] = depth;
  let min = depth;
  for (const j of graph[i]) {
    if (j === pre) continue;
    const backDepth = dfs(graph, j, i, output, depth + 1, rank);
    if (backDepth <= depth) {
      disconnect(graph, i, j);
    } else {
      output.push([i, j]);
    }
    min = Math.min(min, backDepth);
  }
  return min;
}

function disconnect(graph, i, j) {
  graph[i].delete(j);
  graph[j].delete(i);
}

function createGraph(n, connections) {
  const graph = new Array(n).fill(null).map(() => new Set());
  for (const [v1, v2] of connections) {
    graph[v1].add(v2);
    graph[v2].add(v1);
  }
  return graph;
}
