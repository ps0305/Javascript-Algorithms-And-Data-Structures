/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

const createGraph = (n, edges) => {
  const graph = [...new Array(n)].map(() => []);
  for (let i = 0; i < edges.length; i++) {
    const [v1, v2] = edges[i];
    graph[v1].push(v2);
    graph[v2].push(v1);
  }
  return graph;
};

const getHeight = (graph, v, visited = {}) => {
  visited[v] = true;
  let max = -1;
  for (let i = 0; i < graph[v].length; i++) {
    if (!visited[graph[v][i]]) {
      const height = getHeight(graph, graph[v][i], visited);
      max = Math.max(max, height);
    }
  }
  return max + 1;
};

var findMinHeightTrees = function(n, edges) {
  const graph = createGraph(n, edges);
  const heights = new Array(n).fill(0);
  let min = Infinity;
  for (let i = 0; i < graph.length; i++) {
    heights[i] = getHeight(graph, i);
    min = Math.min(min, heights[i]);
  }
  const output = [];
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] <= min) {
      output.push(i);
    }
  }
  return output;
};
