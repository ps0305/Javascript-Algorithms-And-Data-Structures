/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph, u = 0, path = [u], output = []) {
  if (u === graph.length - 1) {
    output.push([...path]);
    return output;
  }
  for (const v of graph[u]) {
    path.push(v);
    allPathsSourceTarget(graph, v, path, output);
    path.pop();
  }
  return output;
};
