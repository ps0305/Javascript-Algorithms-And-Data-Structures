/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const graph = createGraph(tickets);
  const output = helper(graph, 'JFK');
  return output.reverse();
};

function helper(graph, start, output = []) {
  while (graph[start].length) {
    helper(graph, graph[start].shift(), output);
  }
  output.push(start);
  return output;
}

function createGraph(tickets) {
  const graph = {};
  for (const [from, to] of tickets) {
    if (!(from in graph)) graph[from] = [];
    if (!(to in graph)) graph[to] = [];
    graph[from].push(to);
  }
  for (const key in graph) {
    graph[key].sort();
  }
  return graph;
}
