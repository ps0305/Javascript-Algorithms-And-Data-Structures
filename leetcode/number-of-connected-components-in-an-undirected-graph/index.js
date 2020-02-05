/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

const dfs = (graph, v, selected) => {
  if (selected[v]) {
    return;
  }
  selected[v] = true;
  for (let i = 0; i < graph[v].length; i++) {
    dfs(graph, graph[v][i], selected);
  }
};

var countComponents = function(n, edges) {
  const graph = [...new Array(n)].map(() => []);
  for (let i = 0; i < edges.length; i++) {
    const [v1, v2] = edges[i];
    graph[v1].push(v2);
    graph[v2].push(v1);
  }
  const selected = new Array(n).fill(false);
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!selected[i]) {
      count += 1;
      dfs(graph, i, selected);
    }
  }
  return count;
};
