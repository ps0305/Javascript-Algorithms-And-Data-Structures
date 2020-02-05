/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */

/*
  S = "cba"
  T = "abcd"
  Output: "cbad"
*/

const createGraph = (str) => {
  const graph = {};
  for (let i = 0; i < 26; i++) {
    const key = String.fromCharCode(97 + i);
    graph[key] = [];
  }
  for (let i = 0; i < str.length - 1; i++) {
    graph[str[i]].push(str[i + 1]);
  }
  return graph;
};

const createCounts = (str) => {
  const counts = {};
  for (const c of str) {
    counts[c] = (counts[c] || 0) + 1;
  }
  return counts;
};

const dfs = (graph, v, counts, output) => {
  if (output.indexOf(v) >= 0) return output;
  for (const i of graph[v]) {
    output = dfs(graph, i, counts, output);
  }
  for (let i = 0; i < counts[v]; i++) {
    output = v + output;
  }
  return output;
};

var customSortString = function(S, T) {
  if (!S.length) {
    return T;
  }
  const graph = createGraph(S);
  const counts = createCounts(T);
  let output = '';
  for (const c of T) {
    output = dfs(graph, c, counts, output);
  }
  return output;
};
