/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const graph = bfs(beginWord, endWord, wordList);
  return dfs(graph, beginWord, endWord);
};

function dfs(graph, beginWord, endWord, selected = [beginWord], output = []) {
  if (selected[selected.length - 1] === endWord) {
    output.push([...selected]);
    return output;
  }
  for (const u of graph[beginWord]) {
    selected.push(u);
    dfs(graph, u, endWord, selected, output);
    selected.pop();
  }
  return output;
}

function bfs(beginWord, endWord, wordList) {
  const graph = createGraph([beginWord, ...wordList]);
  const distance = { [beginWord]: 1 };
  const visited = new Set();
  const queue = [beginWord];
  while (queue.length) {
    const w = queue.shift();
    for (const word of wordList) {
      if (isTransformedWord(w, word)) {
        if (distance[w] + 1 <= (distance[word] || Infinity)) {
          distance[word] = distance[w] + 1;
          graph[w].add(word);
        }
        if (!visited.has(word) && !(endWord in distance)) {
          visited.add(word);
          queue.push(word);
        }
      }
    }
  }
  return graph;
}

function createGraph(arr) {
  const graph = {};
  for (const node of arr) {
    graph[node] = new Set();
  }
  return graph;
}

function isTransformedWord(w1, w2) {
  if (w1 === w2) {
    return false;
  }
  let nDiffs = 0;
  for (let i = 0; i < w1.length; i++) {
    if (w1[i] !== w2[i]) {
      nDiffs += 1;
    }
    if (nDiffs > 1) {
      return false;
    }
  }
  return true;
}
