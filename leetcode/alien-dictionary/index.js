/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  const graph = createGraph(words);
  const output = new Set();
  for (const u in graph) {
    if (hasCycle(graph, u, output)) {
      return '';
    }
  }
  return [...output].reverse().join('');
};

function createGraph(words) {
  const graph = {};
  for (const word of words) {
    for (const c of word) {
      if (!(c in graph)) {
        graph[c] = [];
      }
    }
  }
  for (let i = 0; i < words.length - 1; i++) {
    let j = 0;
    while (j < words[i].length && j < words[i + 1].length && words[i][j] === words[i + 1][j]) {
      j += 1;
    }
    if (j < words[i].length && j < words[i + 1].length) {
      const c1 = words[i][j];
      const c2 = words[i + 1][j];
      graph[c1].push(c2);
    }
  }
  return graph;
}

function hasCycle(graph, u, output, visited = new Set()) {
  if (output.has(u)) {
    return false;
  }
  if (visited.has(u)) {
    return true;
  }
  visited.add(u);
  while (graph[u].length) {
    if (hasCycle(graph, graph[u].pop(), output, visited)) {
      return true;
    }
  }
  visited.delete(u);
  output.add(u);
  return false;
}
