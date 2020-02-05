## README

### Test Cases

```js
words = ['wrt', 'wrf', 'er', 'ett', 'rftt'];
output = ['wertf'];

words = ['z', 'z'];
output = ['z'];

words = ['z', 'x', 'z'];
output = [];
```

### Algorithm

- Create graph from words.
  - We need to ensure every characters in words is included in graph so that when running topological sort, every words could be included.

```js
for (let j = 0; j < words[i].length; j++) {
  if (!graph[words[i][j]]) {
    graph[words[i][j]] = [];
  }
}
```

- Find the first word that is different and create an edge for that relationship.

```js
const n = Math.min(words[i].length, words[i + 1].length);
for (let j = 0; j < n; j++) {
  const c1 = words[i][j];
  const c2 = words[i + 1][j];
  if (c1 !== c2) {
    if (graph[c1].indexOf(c2) < 0) {
      graph[c1].push(c2);
    }
    break;
  }
}
```

- Run topological sort with DFS to graph
  - DFS can be used to traverse from deepest dependency first.
  - For each node, if its dependencies has been visited, then it can be visited safely.
  - If a node is visited yet not in stack, it means there exists a cycle.
