/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const graph = createGraph(numCourses, prerequisites);
  const output = new Set();
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(graph, i, output)) {
      return [];
    }
  }
  return [...output];
};

function hasCycle(graph, i, output, stack = new Set()) {
  if (stack.has(i)) {
    return true;
  }
  if (output.has(i)) {
    return false;
  }
  stack.add(i);
  for (const j of graph[i]) {
    if (hasCycle(graph, j, output, stack)) {
      return true;
    }
  }
  stack.delete(i);
  output.add(i);
  return false;
}

function createGraph(numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(null).map(() => []);
  for (const [c1, c2] of prerequisites) {
    graph[c1].push(c2);
  }
  return graph;
}
